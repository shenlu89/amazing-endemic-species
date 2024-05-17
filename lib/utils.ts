const random = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min + 1)) + min;
};

const objToMap = (object: any) => new Map(Object.entries(object));

const formatNumber = (num: number) => {
  if (num > 1e4) return `${(num / 1e3).toFixed(1)} K+`;
  return num.toLocaleString();
};

export { random, objToMap, formatNumber };
