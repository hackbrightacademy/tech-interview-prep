// Solution to Replace Vowels

function replaceVowels(chars) {
    // Given list of chars, return a list with vowels replaced by '*'.

    for (let i=0; i < chars.length; i += 1) {
        if ("AEIOUaeiou".includes(chars[i])) {
            chars[i] = "*";
        }
    }
    
    return chars
}

// Test with sample input
console.log(replaceVowels(['h', 'i']))
console.log(replaceVowels(['o', 'o', 'o']))
console.log(replaceVowels(['z', 'z', 'z']))
