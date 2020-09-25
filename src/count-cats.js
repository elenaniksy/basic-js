const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach(arr => {
    arr.map(item => (item === '^^')? result++ : result)
  });
  return result;
};
