"""
Reverse and Capitalize

Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

https://edabit.com/challenge/5SJdiGXZwRiFK5vEJ
"""


def reverse_capitalize(txt: str) -> str:
    return "".join(reversed(txt)).upper()
