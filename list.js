const arrayToList = array => {
    let list = null;
    for(let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }

    return list;
};

const aList = arrayToList([10, 20])
console.log(aList);

const listToArray = list => {
    let array = [];

    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array;
};

console.log(listToArray(aList));

const prepend = (value, list) => {
 return {value: value, rest: list}
};

console.log(prepend(10, prepend(20, null)));

const nth = (list, n) => {
    if (!list) 
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
};

console.log(nth(aList, 1));