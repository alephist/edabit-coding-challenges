"""
Lowercase, Uppercase or Mixed?

Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

https://edabit.com/challenge/Jjpou65vd6t6xGwvN
"""


def get_case(txt: str) -> str:
    if txt.isupper():
        return 'upper'
    elif txt.islower():
        return 'lower'
    else:
        return 'mixed'
