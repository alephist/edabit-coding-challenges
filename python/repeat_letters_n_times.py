"""
Repeating Letters N Times

Create a function that repeats each character in a string n times.

https://edabit.com/challenge/mZyHqasaNyFp23RcS
"""


def repeat(txt: str, n: int) -> str:
    return "".join(char * n for char in txt)
