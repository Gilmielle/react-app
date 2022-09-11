import React, { useRef } from 'react';
import { useAdvsData } from '../../hooks/useAdvsData';
import { LoadingIcon } from '../Icons';
import { Card } from '../Card';
import styled, { keyframes } from 'styled-components'

const AlertDiv = styled.div.attrs(props => ({
  role: 'alert',
}))`
  text-align: center;
  grid-column: 1 / -1;
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media all and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (max-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoadingIconWrapper = styled(AlertDiv)`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  & > svg {
    width: 55px;
    height: 55px;
    animation: ${rotate} 2s linear infinite;
  }
`;

export function CardsList() {
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [{ advs, loading, errorLoading }] = useAdvsData(bottomOfList);

  return (
    <StyledUl>
      {advs.length === 0 && !loading && !errorLoading && (
        <AlertDiv>Нет ни одного объявления</AlertDiv>
      )}

      {
        advs.map(adv => (
          <Card 
            key={adv.id} 
            advData={adv}
          />
      ))}

      <div ref={bottomOfList} />

      {loading && (
        <StyledLoadingIconWrapper>
          <LoadingIcon />
          Загрузка...
        </StyledLoadingIconWrapper>
      )}

      {errorLoading && (
        <AlertDiv>
          {errorLoading}
        </AlertDiv>
      )}
    </StyledUl>
  );
}