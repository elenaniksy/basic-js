const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if(Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error('Error!');
  }

  let output = '';
  const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = date.getMonth();


  switch (monthName[month]) {
    case 'January':
    case 'February':
    case 'December' :
      output = 'winter';
      break;

    case "March":
    case "April":
    case "May":
      output = "spring";
      break;

    case "June":
    case "July":
    case "August":
      output = "summer";
      break;

    case "September":
    case "October":
    case "November":
      output = "fall";
      break;

    default:
      return 'Unable to determine the time of year!';
  }

  return output;
};
