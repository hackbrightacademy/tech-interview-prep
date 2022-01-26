"""Solution for Add All Numbers."""


def add_numbers(nums):
    total = 0
    for num in nums:
        total += num

    return total


# Tests

# 1 + 1 + 1 = 3
print(add_numbers([1, 1, 1]))

# No numbers to add, return 0
print(add_numbers([]))