const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },

  addLink(value, defaultValue = "( )") {
    if(value !== undefined) {
      this.chainArray.push(`( ${value} )`);
      return this;
    } else {
      this.chainArray.push(defaultValue);
      return this;
    }
  },

  removeLink(position) {
    if(typeof position !== 'number' || !Number.isInteger(position)) {
        this.chainArray = [];
        throw new Error('Wrong position!');
    }
    this.chainArray.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chainArray.reverse();
    return this;
  },

  finishChain() {
    let finishedString = this.chainArray.join('~~');
    this.chainArray = [];
    return finishedString;
  }
};

module.exports = chainMaker;
