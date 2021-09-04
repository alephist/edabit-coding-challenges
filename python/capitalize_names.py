"""
Capitalize the Names

Create a function that takes a list of names and returns a list where only the first letter of each name is capitalized.

https://edabit.com/challenge/CGsWyXpZ3EHrdpQmA
"""
from typing import List


def cap_me(lst: List[str]) -> List[str]:
    return [name.title() for name in lst]
