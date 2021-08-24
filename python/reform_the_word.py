"""
Re-Form the Word

A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

https://edabit.com/challenge/vxKcxazrqgmNA64db
"""


def get_word(left: str, right: str) -> str:
    return f"{left}{right}".title()
