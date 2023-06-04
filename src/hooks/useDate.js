export default function useDate() {
  const newDate = new Date();

  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  const date = `${month < 10 ? `0${month}` : month}/${
    day < 10 ? `0${day}` : day
  }/${year}`;

  return date;
}
