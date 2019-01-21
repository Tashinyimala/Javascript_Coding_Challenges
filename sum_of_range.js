const range = (start, end, step) => {
    if (step == null) step = 1;
    var array = [];

    if (step > 0) {
        for(let i = start; i <= end; i+= step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i+=step) {
            array.push(i);
        }
    }

    return array;
};

console.log(range(5, 2, -1));

// Sum of array
const sum = (array) => {
    var total = 0;

    for (let element of array) {
        total += element;
    }

    return total;
};

console.log(sum(range(1, 10)));