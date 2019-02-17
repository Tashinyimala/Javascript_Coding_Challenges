const convertToRoman = num => {
    let roman = '';

    const lookup = {
          M:1000,
          CM:900,
          D:500,
          CD:400,
          C:100,
          XC:90,
          L:50,
          XL:40,
          X:10,
          IX:9,
          V:5,
          IV:4,
          I:1
    };
      
    for (const i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num   -= lookup[i];
        }
    }

    return roman;
  };

  module.exports = convertToRoman;