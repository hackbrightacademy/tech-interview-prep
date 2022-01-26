/* Solution for Find Longest Word. */

function getLongestWord(words) {
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Tests

// ["boo", "a", "I", "hi"] => 'boo'
console.log(getLongestWord(["boo", "a", "I", "hi"]));

// ["one", "two", "superduper", "dog"] => 'superduper'
console.log(getLongestWord(["one", "two", "superduper", "dog"]));

// ["hello", "world"] => 'hello'
console.log(getLongestWord(["hello", "world"]));