function findWordsStartsWithVowels(words) {
    var vowels = [];
    for (word of words) {
        if (word.match(/^[aeiou]/i)) {
            vowels.push(word);
        }
    }
    return vowels;
}
