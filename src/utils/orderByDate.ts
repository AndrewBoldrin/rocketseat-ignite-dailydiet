export function orderByDate(dateList: string[]) {
  return dateList.sort(function (a, b) {
    a = a.split(".").reverse().join("");
    b = b.split(".").reverse().join("");
    return a < b ? 1 : a > b ? -1 : 0;
  });
}
