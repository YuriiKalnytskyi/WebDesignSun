const random = (length) => {
  return Math.floor(Math.random() * length);
};

const numbers = (_length) => {
  const one = random(_length);
  const tow = random(_length);

  return {
    one: one === tow ? random(_length) : one,
    tow
  };
};
module.exports = {
  numbers
};
