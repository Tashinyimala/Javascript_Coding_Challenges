const rot13 = str => {
    let decipher = '';

    const lookup = {
        1:'A', 2:'B', 3:'C', 4:'D', 5:'E', 6:'F', 7:'G', 8:'H', 9:'I', 10:'J',
        11:'K', 12:'L', 13:'M', 14:'N', 15:'O', 16:'P', 17:'Q', 18:'R',
        19:'S', 20:'T', 21:'U', 22:'V', 23:'W', 24:'X', 25:'Y', 26:'Z'
    };

    const newStr = str.toUpperCase();
    
    // Loop through the sentence
    for(let i = 0; i < newStr.length; i++) {
      
      // check character is whitespace and special character
      if (newStr[i] === ' ') {
        decipher += ' ';
      } else if (newStr[i].match(/\W/)) { // Special character
        decipher += newStr[i];
      }
      
      // lookup for each character
      for(let j in lookup){
        if((newStr[i] === lookup[j])) {
          //Caesars cipher
          let num = parseInt(j, 10);
          num += 13;
          
          if(num > 26) {
            num = num - 26;
          }
          decipher += lookup[num]; // deciphering each character
        }
      }
    }
    
    return decipher;
}
  
module.exports = rot13;