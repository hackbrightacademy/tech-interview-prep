"""Solution for Find Locations of Even Numbers."""


def get_even_locations(nums):
    even_indices = []

    for i in range(len(nums)):
        if nums[i] % 2 == 0:
            even_indices.append(i)

    return even_indices
