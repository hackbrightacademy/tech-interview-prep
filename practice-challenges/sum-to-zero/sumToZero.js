/* Solution for Sum To Zero. */

function sumToZero(numbers) {
    // It's easier and faster to look for -num in the list, rather than
    // getting each pair and adding them

    for (const num of numbers) {
        if (numbers.includes(-num)) {
            return true;
        }
    }
    return false;

}

// Test with sample input
console.log(sumToZero([2, 1, 6]))
console.log(sumToZero([5]))
console.log(sumToZero([8, 2, 3, -2]))
