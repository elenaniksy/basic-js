const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const toStr = (s) => {
    if (typeof s === 'string') {
      return s;
    } else {
      return String(s);
    }
  }

  let incomingStr = toStr(str);
  let strAddition = [];
  let result = [];

  const formStrAddition = () => {
    strAddition.push(incomingStr);
    if(options.additionRepeatTimes && typeof options.additionRepeatTimes === 'number') {
      for(let i = 0; i <options.additionRepeatTimes; i++) {
        if(options.addition) {
          strAddition.push(toStr(options.addition));
        }
      }
      if (options.additionSeparator) {
        return strAddition.join(options.additionSeparator);
      } else {
        return strAddition.join('');
      }
    } else {
      if(options.addition) {
        strAddition.push(toStr(options.addition));
      }
      return strAddition.join('');
    }
  };

  if(options) {
    const strToReplicate = formStrAddition();
    if(options.repeatTimes && typeof options.repeatTimes === 'number') {
      for (let i = 0; i < options.repeatTimes; i++) {
        result.push(strToReplicate);
      }
    } else {
      result.push(strToReplicate);
    }

    if (options.separator) {
      return result.join(options.separator);
    } else {
      return result.join('+');
    }

  } else {
    return incomingStr;
  }
};



