const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  const output = {
    turns: null,
    seconds: null
  }
  output.turns = Math.pow(2, disksNumber) -1;
  output.seconds = Math.floor(output.turns * 3600 / turnsSpeed);

  return output;
};
