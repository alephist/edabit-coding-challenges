"""
Miserable Parody of a Calculator

Create a function that will handle simple math expressions. The input is an expression in the form of a string.

https://edabit.com/challenge/F7qjLMhPzJgyNEqdi
"""


def calculator(txt: str) -> int:
    return eval(txt)
