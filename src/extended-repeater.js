const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = () => options.repeatTimes ? options.repeatTimes : 1;
  const separator = () => options.separator ? options.separator : '+';
  const addition = () => {
    if (options.addition !== undefined) {
      if(typeof options.addition === 'string') {
        return options.addition;
      } else {
        return String(options.addition);
      }
    } else {
      return false;
    }
  }
  const additionSeparator = () => options.additionSeparator ? options.additionSeparator : '|';
  const additionRepeatTimes = () => options.additionRepeatTimes  ? options.additionRepeatTimes : 1;
  const sepLength = (separator) => -1 * separator.length;

  let additionStr = '';
  let result = '';

  for(let i = 0; i < additionRepeatTimes(); i++) {
    if(addition() === false) {
       additionStr;
    } else {
      additionStr += addition() + additionSeparator();
    }
  }
  additionStr = additionStr.slice(0, sepLength(additionSeparator()));

  for (let i = 0; i < repeatTimes(); i++) {
    if(repeatTimes() === 1) {
      return result += str + additionStr;
    } else {
      result += str + additionStr;
    }
    result+= separator();
  }

  result = result.slice(0, sepLength(separator()));
  return result;
};








