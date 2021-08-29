"""
Find the Average of the Letters

Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

A = 1
B = 2
C = 3
D = 4
E = 5

Return the result rounded to two decimal points.

https://edabit.com/challenge/X4i7hHGhKYbGkcHx6
"""
from typing import List


def average_index(letters: List[str]) -> float:
    sum_of_letter_nums = sum(ord(letter) - 96 for letter in letters)
    return round(sum_of_letter_nums/len(letters), 2)
