import axios from "axios";
import { useEffect, useState } from "react";
import { createDateString } from "../utils/createDateString";

export interface IAdvData {
  id: string;
  oldPrice: string;
  price: string;
  title: string;
  seen: boolean;
  locality: string;
  date: string;
}

function createAdvsData(data: any[]) {
  return data.map((item) => {

    const advData: IAdvData = {
      id: item.id,
      oldPrice: item.oldPrice,
      price: item.price,
      title: item.title,
      seen: item.seen,
      locality: item.locality,
      date: createDateString(new Date(item.date * 1000)),
    };

    return advData;
  })
}

export function useAdvsData(ref: React.RefObject<HTMLElement>) {
  const [advs, setAdvs] = useState<IAdvData[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState(1);
  const advsLimit = 10;

  useEffect(() => {

    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const data = await axios.get('https://6075786f0baf7c0017fa64ce.mockapi.io/products', {
          params: {
            limit: advsLimit,
            page: String(nextAfter),
          }
        });

        const advsArray = createAdvsData(data.data);

        setAdvs(prevChildren => prevChildren.concat(...advsArray));
        setNextAfter(prevState => prevState + 1);
      } catch (error) {
        setErrorLoading(String(error));
      } finally {
        setLoading(false);
      }
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && nextAfter <= 10) {
        if (loading) return;
        load();
      } else if (nextAfter > 10) {
        setErrorLoading('Объявлений больше нет');
      }
    }, {
      rootMargin: '50px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [nextAfter, loading, nextAfter]);

  return [{ advs, loading, errorLoading }];
}