const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const result = [];

  if(Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === '--discard-next') {
        result.shift(arr[i+1]);
      } else if (arr[i] === '--discard-prev') {
        result.shift(arr[i-1]);
      } else if (arr[i] === '--double-next') {
        result.push(arr[i]);
        result.push(arr[i+1]);
      } else if (arr[i] === '--double-prev') {
        result.push(arr[i]);
        result.push(arr[i+1]);
      } else {
        result.push(arr[i]);
      }
    }
  } else {
    return [];
  }
 return result;
};
