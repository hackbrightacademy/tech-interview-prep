"""Solution for More Evens or Odds?."""


def more_evens_or_odds(nums):
    count_evens = 0
    count_odds = 0

    for num in nums:
        if num % 2 == 0:
            count_evens = count_evens + 1
        else:
            count_odds = count_odds + 1

    if count_evens > count_odds:
        return 'even'
    elif count_odds > count_evens:
        return 'odd'
    else:
        return 'even and odd'
