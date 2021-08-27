"""
Find the Unique Letters

Create a function that takes a string and returns the letters that occur only once.

Notes
The final list should not include letters that appear more than once in the string.
Return the letters in the sequence they were originally in, do not sort them.
All letters will be in lowercase.

https://edabit.com/challenge/GWBvmSJdciGAksuwS
"""
from typing import List


def find_letters(word: str) -> List[str]:
    letter_list = []

    for letter in word:
        if word.count(letter) == 1:
            letter_list.append(letter)

    return letter_list
