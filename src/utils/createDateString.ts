export function createDateString(date: Date) {
  const day = makeTwoDigit(date.getDate());
  const month = makeTwoDigit(date.getMonth() + 1);
  const year = String(date.getFullYear()).substring(2);
  const hours = makeTwoDigit(date.getHours());
  const minutes = makeTwoDigit(date.getMinutes());

  return `${day}.${month}.${year} ${hours}.${minutes}`;
}

function makeTwoDigit(date: number) {
  const result = date < 10 ? `0${date}` : date;

  return result;
}