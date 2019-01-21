const reverseArray = (array) => {
    let newArray = [];

    for(let i = array.length - 1; i >= 0; i--) {
       newArray.push(array.pop());
    }

    return newArray;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      var old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old; 
      return array;
    }
  }
  
  console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))