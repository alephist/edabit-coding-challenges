"""
Match the Last Item

Create a function that takes a list of items and checks if the last item matches the rest of the list concatenated together.

https://edabit.com/challenge/oGkwLhmpys95rjtQ2
"""
from typing import List


def match_last_item(lst: List) -> bool:
    return "".join(str(item) for item in lst[:-1]) == lst[-1]
