"""Python solution to Remove Duplicates"""

def remove_dupes(numbers):
    """Return new list of numbers with duplicates removed."""

    result = []

    for num in numbers:
        if num not in result:
            result.append(num)

    return result


# Test with sample input
print(remove_dupes([5, 5, 5]))
print(remove_dupes([1, 4, 1, 1, 3]))
print(remove_dupes([8, 11, 9]))
