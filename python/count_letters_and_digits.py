"""
Count the Letters and Digits

Write a function that takes a string and calculates the number of letters and digits within it. Return the result in a dictionary.

https://edabit.com/challenge/KEz3TAQfh9WxSZMLH
"""
from typing import Dict


def count_all(txt: str) -> Dict[str, int]:
    count_summary = {
        'LETTERS': 0,
        'DIGITS': 0
    }

    for char in txt:
        if char.isalpha():
            count_summary['LETTERS'] += 1
        elif char.isdigit():
            count_summary['DIGITS'] += 1
    return count_summary
