"""Solution for Show Even Numbers' Indices"""

def show_even_indices(nums):
    """Given list of ints, return list of *indices* of even numbers in list."""

    indices = []

    for i in range(len(nums)):
        if nums[i] % 2 == 0:
            indices.append(i)

    return indices

# Test against sample input
print(show_even_indices([2, 4, 6, 8]))
print(show_even_indices([1, 2, 3, 4, 6, 8]))
print(show_even_indices([7, 3, 11]))


# Alternatively, You could also do this with the enumerate function, which allows
# you to iterate over a list getting both the current item and the index at once.

def show_even_alternative(nums):
    """Given list of ints, return list of *indices* of even numbers in list."""

    indices = []

    for i, num in enumerate(nums):
        if num % 2 == 0:
            indices.append(i)
    
    return indices

# Test against sample input
print(show_even_alternative([2, 4, 6, 8]))
print(show_even_alternative([1, 2, 3, 4, 6, 8]))
print(show_even_alternative([7, 3, 11]))
