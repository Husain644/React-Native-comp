

export function toHour(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  const minutesStr = minutes.toString().padStart(2, '0');
  return `${hours}:${minutesStr}`;
}
