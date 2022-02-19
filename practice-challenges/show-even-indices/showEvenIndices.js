// Solution for Show Even Numbers' Indices

function showEvenIndices(nums) {
    // Given array of ints, return array of *indices* of even numbers in array.

    indices = []

    for (let i=0; i < nums.length; i += 1) {
        if (nums[i] % 2 == 0) {
            indices.push(i);
        }
    }

    return indices
}

// Test with sample input
console.log(showEvenIndices([2, 4, 6, 8]))
console.log(showEvenIndices([1, 2, 3, 4, 6, 8]))
console.log(showEvenIndices([7, 3, 11]))
