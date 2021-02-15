const LettertoNumberMapping = {
    "A": "1",
    "a": "1",
    "B": "2",
    'b': "2",
    "C": "3",
    "c": "3",
    "D": "4",
    "d": "4",
    "E": "5",
    "e": "5",
    "F": "6",
    "f": "6",
    "G": "7",
    "g": "7",
    "H": "8",
    "h": "8",
    "I": "9",
    "i": "9",
    "J": "10",
    "j": "10",
    "K": "11",
    "k": "11",
    "L": "12",
    "l": "12",
    "M": "13",
    "m": "13",
    "N": "14",
    "n": "14",
    "O": "15",
    "o": "15",
    "P": "16",
    "p": "16",
    "Q": "17",
    "q": "17",
    "R": "18",
    "r": "18",
    "S": "19",
    "s": "19",
    "T": "20",
    "t": "20",
    "U": "21",
    "u": "21",
    "V": "22",
    "v": "22",
    "W": "23",
    "w": "23",
    "X": "24",
    "x": "24",
    "Y": "25",
    "y": "25",
    "Z": "26",
    "z": "26"
  }
  
  // console.log(LettertoNumberMapping.A);
  
 async function generateUniqueId(word) {
  
    var uid = "-";
  
    for (let i = 0; i < word.length; i++) {
      var w = word[i];
      // console.log("WWW: " + w);
      switch (w) {
        case 'A' && 'a':
          uid += LettertoNumberMapping.A
          // console.log("SC uid::"+uid);
          break;
        case 'B' && 'b':
          uid += LettertoNumberMapping.B
          break;
        case 'C' && 'c':
          uid += LettertoNumberMapping.C
          break;
        case 'D' && 'd':
          uid += LettertoNumberMapping.D
          break;
        case 'E' && 'e':
          uid += LettertoNumberMapping.E
        case 'F' && 'f':
          uid += LettertoNumberMapping.F
          break;
        case 'G' && 'g':
          uid += LettertoNumberMapping.G
          break;
        case 'H' && 'h':
          uid += LettertoNumberMapping.H
          break;
        case 'I' && 'i':
          uid += LettertoNumberMapping.I
          break;
        case 'J' && 'j':
          uid += LettertoNumberMapping.J
          break;
        case 'K' && 'k':
          uid += LettertoNumberMapping.K
          break;
        case 'L' && 'l':
          uid += LettertoNumberMapping.L
          break;
        case 'M' && 'm':
          uid += LettertoNumberMapping.M
          break;
        case 'N' && 'n':
          uid += LettertoNumberMapping.N
          break;
        case 'O' && 'o':
          uid += LettertoNumberMapping.O
          break;
        case 'P' && 'p':
          uid += LettertoNumberMapping.P
          break;
        case 'Q' && 'q':
          uid += LettertoNumberMapping.Q
          break;
        case 'R' && 'r':
          uid += LettertoNumberMapping.R
          break;
        case 'S' && 's':
          uid += LettertoNumberMapping.S
          break;
        case 'T' && 't':
          uid += LettertoNumberMapping.T
          break;
        case 'U' && 'u':
          uid += LettertoNumberMapping.U
          break;
        case 'V' && 'v':
          uid += LettertoNumberMapping.V
          break;
        case 'W' && 'w':
          uid += LettertoNumberMapping.W
          break;
        case 'X' && 'x':
          uid += LettertoNumberMapping.X
          break;
        case 'Y' && 'y':
          uid += LettertoNumberMapping.Y
          break;
        case 'Z' && 'z':
          uid += LettertoNumberMapping.Z
          break;
        default: break;
      }
      uid +='-';
      // string.indexOf(searchValue[, fromIndex])
  
      // uid = +`${uid}${LettertoNumberMapping.w}`;
      // var w = indexesOf(word,i);
      // console.log("nsss:"+LettertoNumberMapping.w);
    }
    uid = uid.substring(0,uid.length-1);
    // console.log(`${word.length}-${uid}`);
    // console.log(":::" + word);
    return `${word.length}${uid}`;
  }

  module.exports = generateUniqueId;
// export default generateUniqueId;