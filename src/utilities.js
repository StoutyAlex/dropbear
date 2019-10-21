const peek = array => array[0];
const pop = array => array.shift();

const pipe = (...funcs) => value =>
  funcs.reduce((value, func) => func(value), value);

module.exports = {
  peek,
  pop,
  pipe,
};
