"""Solution for Sum to Zero"""

def sum_to_zero(numbers):
    """Given list of ints, return True if any two nums sum to 0."""

    # It's easier and faster to look for -n in the list, rather than
    # getting each pair and adding them

    for num in numbers:
        if -num in numbers:
            return True

    return False

# Test with sample input
print(sum_to_zero([2, 1, 6]))
print(sum_to_zero([8, 2, 3, -2]))
print(sum_to_zero([5]))
