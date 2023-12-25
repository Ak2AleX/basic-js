const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.alph = 'abcdefghijklmnopqrstuvwxyz';
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let encryptedMessage = '';
    let message1 = message.toLowerCase().replaceAll(' ', '');
    key = key.toLowerCase();
    if (message1.length > key.length) {
     key = key.repeat(3);
    }
    for (let i = 0; i < message1.length; i += 1) {
      if (!this.alph.includes(message1[i])) {
        encryptedMessage += message1[i];
      } else {
        let index = this.alph.indexOf(message1[i]) + this.alph.indexOf(key[i]); 
        if (index >= this.alph.length) {
          index = index - this.alph.length;
        }
        let letter = this.alph[index];
        encryptedMessage += letter;
      }
    }
    for (let i = 0; i < message.length; i += 1) {
      if (message[i] === ' ') {
        encryptedMessage = encryptedMessage.slice(0, i) + ' ' + (encryptedMessage.slice(i));
      }
    }
    
    if (!this.mode) {
      return encryptedMessage.toUpperCase().split('').reverse().join('');
    } else {
      return encryptedMessage.toUpperCase();
    }

  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let message = '';
    let message1 = encryptedMessage.toLowerCase().replaceAll(' ', '');
    key = key.toLowerCase();
    while (message1.length > key.length) {
     key = key.repeat(2);
    }
    for (let i = 0; i < message1.length; i += 1) {
      if (!this.alph.includes(message1[i])) {
        message += message1[i];
      } else {
        let index = this.alph.indexOf(message1[i]) - this.alph.indexOf(key[i]); 
        if (index < 0) {
          index = index + this.alph.length;
        }
        let letter = this.alph[index];
        message += letter;
      }
    }
    for (let i = 0; i < message.length; i += 1) {
      if (encryptedMessage[i] === ' ') {
        message = message.slice(0, i) + ' ' + (message.slice(i));
      }
    }
    if (!this.mode) {
      return message.toUpperCase().split('').reverse().join('');
    } else {
      return message.toUpperCase();
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
