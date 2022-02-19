// Solution to Remove Duplicates

function removeDupes(numbers) {
    // Return new list of numbers with duplicates removed.
    
    result = [];

    for (const num of numbers) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

// Test with sample input
console.log(removeDupes([5, 5, 5]))
console.log(removeDupes([1, 4, 1, 1, 3]))
console.log(removeDupes([8, 11, 9]))
