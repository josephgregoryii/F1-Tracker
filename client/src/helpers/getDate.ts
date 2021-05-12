const Days: number = 1;

export const getDate = (utc_date: string): string => {
  var formatted_date: Date = new Date(utc_date);
  formatted_date.setDate(formatted_date.getDate() + Days);

  return formatted_date.toDateString();
};

