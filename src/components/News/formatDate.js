const formatDate = (...date) => {
  //   const newDate = new Date(date);
  //   let day = newDate.getDate();

  //   if (day < 10) day = '0' + day;

  //   let month = newDate.getMonth();

  //   if (month < 10) month = '0' + month;

  //   let year = newDate.getFullYear();

  //   let result = day + '/' + month + '/' + year;

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
