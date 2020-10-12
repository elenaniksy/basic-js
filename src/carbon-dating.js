const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let smplAct = sampleActivity;
  if (typeof(smplAct) === 'string') {
    smplAct = parseFloat(smplAct);
    if(smplAct <= 0 || smplAct > MODERN_ACTIVITY || !isFinite(smplAct)) return false;
    return Math.ceil(Math.log(MODERN_ACTIVITY / smplAct) / (0.693 / HALF_LIFE_PERIOD));
  } else {
    return false;
  }
};
