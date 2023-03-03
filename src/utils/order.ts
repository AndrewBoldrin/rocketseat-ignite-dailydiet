import { mealDTO } from "storage/Meal/mealStorageDTO";
import { formatDate } from "./formatDate";

export function orderByRecentDate(dateList: string[]) {
  return dateList.sort(function (a, b) {
    a = formatDate(a);
    b = formatDate(b);
    a = a.split(".").reverse().join("");
    b = b.split(".").reverse().join("");

    return a < b ? 1 : a > b ? -1 : 0;
  });
}

export function orderTime(timeList: mealDTO[]) {
  return timeList.sort(function (a, b) {
    return a.time > b.time ? 1 : a.time < b.time ? -1 : 0;
  });
}
