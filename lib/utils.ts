const random = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min + 1)) + min;
};

const objToMap = (object: any) => new Map(Object.entries(object));

export { random, objToMap };
