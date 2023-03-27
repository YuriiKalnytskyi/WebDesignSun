const numbers = (maxNumber, size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    const elem = Math.floor(Math.random() * maxNumber);
    arr.includes(elem) ? numbers(maxNumber, size) : arr.push(elem);
  }
  return arr;
};

module.exports = {
  numbers
};
