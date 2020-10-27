const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }

  encrypt(m, k) {
    const message = [...m.toUpperCase()];
    const keys = [...k.toUpperCase()];
    let position = 0;
    let result = message.map( item => {
      if (this.alphabet.includes(item)) {
        let indexOfItem = (this.alphabet.indexOf(keys[position]) + this.alphabet.indexOf(item)) % this.alphabet.length;
        position = (position + 1) % keys.length;
        return this.alphabet[indexOfItem];
      }
      return item;
    } );
    return this.mode ? result.join('') : result.reverse().join('');
  }

  decrypt(m, k) {
    const message = [...m.toUpperCase()];
    const keys = [...k.toUpperCase()];
    let position = 0;
    let result = message.map( item => {
      if (this.alphabet.includes(item)) {
        let indexOfItem = this.alphabet.indexOf(item) - this.alphabet.indexOf(keys[position]);
        if (indexOfItem < 0) indexOfItem += this.alphabet.length;
        position = (position + 1) % keys.length;
        return this.alphabet[indexOfItem];
      }
      return item;
    } );
    return this.mode ? result.join('') : result.reverse().join('');
  }

}

module.exports = VigenereCipheringMachine;
