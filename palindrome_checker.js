const reverseStr = str => {
    return str
      .toLowerCase()
      .replace(/[\. ,:-_/()-]+/g,'')
      .split('')
      .reverse()
      .join('')
  };
  
  const isPalindrome = str => {
    const newStr = str
                    .toLowerCase()
                    .replace(/[\. ,:-_/()-]+/g,'');

    return newStr === reverseStr(str)? true: false;
  }; 

  module.exports = isPalindrome;