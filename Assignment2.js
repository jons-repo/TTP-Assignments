// forEach()
function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// map()
function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = callback(array[i]);
    }
    return result;
}

// filter()
function myFilter(array, callback) {
    const result = [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result[index] = array[i];
            index++;
        }
    }
    return result;
}

// some() (aka any())
function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]))
            return true;
    }
    return false;
}

// every()
function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i]))
            return false;
    }
    return true;
}

// reduce()
function myReduce(array, callback, value) {
    if (value == undefined)
        accumulator = undefined;
    else
        accumulator = value;

    for (let i = 0; i < array.length; i++) {
        if (accumulator === undefined)
            accumulator = array[i];
        else
            accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

// includes()
function myIncludes(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) == element)
            return true;
    }
    return false;
}

// indexOf()
function myIndexOf(array, element, index) {
    for (let i = index; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

// push()
function myPush(array, ...elements) {
    const length = array.length;
    for (let i = 0; i < elements.length; i++) {
        array[length + i] = elements[i];
    }
    return array.length;
}

// lastIndexOf()
function myLastIndexOf(array, element) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == element)
            return i;
    }
    return -1;
}

// Object.keys()
function grabKeys(object) {
    const keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

// Object.values()
function grabValues(obj) {
    const values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
}

// Sum of a Range
function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
function sum(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

// Reverse an Array
function reverseArray(array) {
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}
function reverseArrayInPlace(array) {
    // Iterate over first half
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        // Swap corresponding elements from both halves
        const temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
    }
}

// A List
function prepend(element, list) {
    return { value: element, rest: list };
}
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = prepend(array[i], list);
    }
    return list;
}
function listToArray(list) {
    const array = [];
    while (list) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}
function nth(list, position) {
    if (list) {
        if (position === 0) {
            return list.value;
        } else {
            return nth(list.rest, position - 1);
        }
    }
    return undefined;
}

// Deep Comparison
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

// Given an array nums, write a function to move all 0's
// to the end of it while maintaining the relative order
// of the non-zero elements.
function moveZeros(nums) {
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}








