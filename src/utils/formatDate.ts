export function formatDate(date: string, separator = ".") {
  const format = /(\d{2})(\d{2})(\d{2})/g;
  const onlyNumbers = date.replace(/[^0-9]/g, "");
  return onlyNumbers.replace(format, `$1${separator}$2${separator}$3`);
}
