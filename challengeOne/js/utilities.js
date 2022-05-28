export function writeTimeStamp() {
  const timeStamp = JSON.stringify(new Date().getTime());
  return timeStamp;
}
