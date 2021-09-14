"""
Is the Sum of Letters Even or Odd?

Create a function that takes a string and returns True if the sum of the position of every letter in the alphabet is even and False if the sum is odd.

https://edabit.com/challenge/Mm8SK7DCvzissCF2s
"""


def is_alpha_sum_even(word: str) -> bool:
    alpha_sum = sum(ord(letter) for letter in word if letter.isalpha())
    return alpha_sum % 2 == 0
