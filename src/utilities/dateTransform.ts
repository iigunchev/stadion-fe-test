function toMonthName(monthNumber: string | undefined) {
  if (monthNumber === undefined) return '';
  const month = Number(monthNumber);
  const date = new Date();
  date.setMonth(month - 1);

  return date
    .toLocaleString('en-US', {
      month: 'short',
    })
    .toUpperCase();
}

function dateTransform(date: string) {
  const dateArray = date.split('/');
  const month = toMonthName(dateArray[1]);
  const day = dateArray[0];
  const year = dateArray[2];

  return `${day} ${month} ${year}`;
}
export default dateTransform;
