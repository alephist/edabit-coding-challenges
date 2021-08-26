"""
Reverse the Case

Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

https://edabit.com/challenge/o3LWAZtjARJHLtyyb
"""


def reverse_case(txt: str) -> str:
    return "".join(char.swapcase() for char in txt)
