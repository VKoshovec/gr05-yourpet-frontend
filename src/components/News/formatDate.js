const formatDate = (...date) => {
  date = date.flat();

  if (typeof date[0] === 'string') date = [Date.parse(...date)];

  date = new Date(...date);

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).format(date);

  //   return result;
};
export default formatDate;
