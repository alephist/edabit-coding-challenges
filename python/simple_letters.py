"""
Simple Letters

Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

https://edabit.com/challenge/SwERCKpctjJDcDZRQ
"""


def longest_string(str_1: str, str_2: str) -> str:
    distinct_letters = set(str_1 + str_2)
    sorted_distict_letters = sorted(distinct_letters)
    return "".join(sorted_distict_letters)
