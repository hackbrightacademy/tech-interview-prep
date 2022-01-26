/* Solution for Add All Numbers. */

function addNumbers(nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }

  return total;
}

// Tests

// 1 + 1 + 1 = 3
console.log(addNumbers([1, 1, 1]));

// No numbers to add, return 0
console.log(addNumbers([]));