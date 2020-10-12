const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const result = [];
  //console.log(arr);

  if(!Array.isArray(arr)) {
    throw Error('Error: this is not an Array!');
  }

  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        if((i+1) < arr.length && (arr[i+2]) !== '--discard-prev') {
          i++;
          continue;
        }
        break;

      case '--discard-prev':
        if(i > 0) {
          result.pop()
        }
        break;

      case '--double-next':
        if(i < arr.length - 1) {
          result.push(arr[i+1]);
        }
        break;

      case '--double-prev':
        if(i > 0 && arr[i-2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;

      default:
        result.push(arr[i]);
    }
  }

  return result;
};


// for(let i = 0; i < arr.length; i++) {
//   console.log(result);
//   if (typeof arr[i] === 'string') {
//
//     if(arr[i] === '--discard-next') {
//       if((i + 1) < arr.length) {
//         i++;
//         continue;
//       } else {
//         break;
//       }
//     }
//
//     if(arr[i] === '--discard-prev') {
//       if(i === 0) {
//         continue;
//       } else {
//         result.pop();
//         continue;
//       }
//     }
//
//     if(arr[i] === '--double-next') {
//       if (i === arr.length) {
//         continue;
//       } else {
//         i++;
//         result.push(arr[i], arr[i]);
//       }
//
//     }
//
//     if (arr[i] === '--double-prev') {
//       if ((i - 1) >= 0 && arr[i - 1] !== '--discard-next') {
//         result.push(arr[i-1], arr[i-1]);
//       } else {
//         continue;
//       }
//     }
//   }
//   result.push(arr[i]);
// }