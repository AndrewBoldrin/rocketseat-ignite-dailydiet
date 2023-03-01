export function formatTime(time: string) {
  const format = /(\d{2})(\d{2})/;
  const onlyNumbers = time.replace(/[^0-9]/g, "");
  return onlyNumbers.replace(format, "$1:$2");
}
