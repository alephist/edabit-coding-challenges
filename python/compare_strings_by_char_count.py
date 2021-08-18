"""
Compare Strings by Count of Characters

Create a function that takes two strings as arguments and return either True or False depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

https://edabit.com/challenge/C3N2JEfFQoh4cqQ98
"""


def comp(txt1: str, txt2: str) -> bool:
    return len(txt1) == len(txt2)
