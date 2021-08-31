"""
Remove the First and Last Characters

Create a function that removes the first and last characters from a string.

https://edabit.com/challenge/MZHWZPrMSA3BNzfdq
"""


def remove_first_last(txt: str) -> str:
    return txt[1:-1] if len(txt) > 2 else txt
