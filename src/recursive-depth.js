const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + Math.max(...arr.map(x =>{
      let totalDepth = this.calculateDepth(x);
      return !isFinite(totalDepth) ? 1 : totalDepth;
    })) : 0;
  }
};