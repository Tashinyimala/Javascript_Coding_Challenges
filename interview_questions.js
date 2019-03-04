// How would you check if a number is an integer?
// Answer: Integer Modulo by 1 result zero

const functions = {
     isInt: num => num % 1 === 0,

     multiply: num => {
        return num1 => num * num1
    },

    averageIs: num => num.average(),

    createBase: base => n => base + n, // closure

    counter: () => {
        let _counter = 0;
        return {
            add: increment => _counter += increment,
            retrieve: () => _counter
        }
    },
    
    countSteps: numOfSteps => {
        if (numOfSteps === 1) return 1;
        if (numOfSteps === 2) return 2;
        
        return functions.countSteps(numOfSteps - 1) + functions.countSteps(numOfSteps - 2); 
    },

    bubbleSort: arr => {
        let swapped = true;
      
         while (swapped) {
         swapped = false;
    
        for (let i = 1; i < arr.length; i++) {
          if (arr[i-1] > arr[i]) {
            swap(arr, i-1, i);
            swapped = true;
          }
        }
      }
      return arr;
    },

    dutchNatFlagSort: arr => {
        let low = 0;
        let mid = 0;
        let high = arr.length - 1;

        while(mid <= high) {
            if (arr[mid] === 0) { swap(arr, low++, mid++); }
            else if (arr[mid] === 2) { swap(arr, mid, high--); }
            else if (arr[mid] === 1) { mid++; }
        }

        return arr;
    }
};

Array.prototype.average = function() {
    const sum = this.reduce((previous, current) => previous + current);
    return sum / this.length;
}

const swap = (arr, i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
};

module.exports = functions;