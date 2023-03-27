export const getData = (data) => {
  const month = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const getFullYear = new Date(data).getFullYear();
  const getMonth = new Date(data).getMonth();
  const getDay = new Date(data).getDate();

  return `${getDay} ${month[getMonth + 1]} ${getFullYear}`;
};
