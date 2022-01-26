/* Solution for Get Words Starting with Vowels */

function getWordsStartingWithVowels(words) {
  let vowelWords = [];

  for (let word of words) {
    if ("aeiou".includes(word[0])) {
      vowelWords.push(word);
    }
  }

  return vowelWords;
}

// Tests

// ["elephant", "hello", "octopus"] => ['elephant', 'octopus']
console.log(getWordsStartingWithVowels(["elephant", "hello", "octopus"]));

// ["hi", "meow", "yay"] => []
console.log(getWordsStartingWithVowels(["hi", "meow", "yay"]));