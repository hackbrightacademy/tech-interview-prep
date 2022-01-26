"""Solution for Find Longest Word."""


def get_longest_word(words):
    longest_word = ""

    for word in words:
        if len(word) > len(longest_word):
            longest_word = word

    return longest_word


# Tests

# ["boo", "a", "I", "hi"] => 'boo'
print(get_longest_word(["boo", "a", "I", "hi"]))

# ["one", "two", "superduper", "dog"] => 'superduper'
print(get_longest_word(["one", "two", "superduper", "dog"]))

# ["hello", "world"] => 'hello'
print(get_longest_word(["hello", "world"]))