"""
Count the Capital Letters

Given a string of letters, how many capital letters are there?

https://edabit.com/challenge/dghm8ECRzffdwKHkA
"""


def capital_letters(txt: str) -> int:
    return len([letter for letter in txt if letter.isupper()])
