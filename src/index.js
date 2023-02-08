const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(parm) {
  let arr = [];
  let arrMors = [];
  let res = "";
  for (let index = 0; index <= parm.length; index += 10) {
    arr.push(parm.slice(index, index + 10));
  }

  arr.map((element) => {
    if (element === "**********") {
      arrMors.push(" ");
    } else {
      let str = "";
      for (let i = 0; i < element.length; i += 2) {
        if (element[i] === "1" && element[i + 1] === "0") {
          str += ".";
        } else if (element[i] === "1" && element[i + 1] === "1") {
          str += "-";
        }
      }
      arrMors.push(str);
    }
  });

  arrMors.map((element) => {
    if (element === " ") {
      res += element;
    } else {
      for (let value of Object.entries(MORSE_TABLE)) {
        if (value[0] === element) {
          res += value[1];
        }
      }
    }
  });

  return res;
}
module.exports = {
  decode,
};