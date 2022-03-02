"""Python solution to Replace Vowels"""

def replace_vowels(chars):
    """Given list of chars, return a list with vowels replaced by '*'."""

    for i, char in enumerate(chars):
        if char in "AEIOUaeiou":
            chars[i] = "*"
    
    return chars


# Test with sample input
print(replace_vowels(['h', 'i']))
print(replace_vowels(['o', 'o', 'o']))
print(replace_vowels(['z', 'z', 'z']))
