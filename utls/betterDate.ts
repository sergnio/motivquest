import { DateTime } from "luxon";

export const newDate = () => DateTime.now().toISODate();
export const dateYesterday = () => DateTime.now().minus({ day: 1 }).toISODate();

export const isSameDay = (date1iso: string, date2iso: string) => {
  const day1 = DateTime.fromISO(date1iso);
  const day2 = DateTime.fromISO(date2iso);

  // this apparently compares the dates without the time - https://stackoverflow.com/questions/60058489/compare-only-dates-with-luxon-datetime
  return day1.startOf("day") <= day2.startOf("day");
};
