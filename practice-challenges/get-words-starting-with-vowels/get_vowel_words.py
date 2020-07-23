"""Solution for Get Words Starting with Vowels"""


def get_words_starting_with_vowels(words):
    vowel_words = []

    for word in words:
        if word[0] in 'aeiou':
            vowel_words.append(word)

    return vowel_words
