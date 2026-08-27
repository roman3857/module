export const findBiggestNumber = (arr) => {
  return Math.max(...arr);
};

export const findAvarage = (arr) => {
  const sum = arr.reduce((acc, item) => {
    return acc + item;
  });
  const avarage = sum / arr.length;
  return avarage;
};
