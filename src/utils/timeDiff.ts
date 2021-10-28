export interface ITime {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export const secondsToDhms = (seconds: number): ITime => {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  if (d > 0) return { days: d, hours: h };
  if (h > 0) return { hours: h, minutes: m };
  if (m > 0) return { minutes: m, seconds: s };
  if (s > 0) return { seconds: s };
  return {};
};
