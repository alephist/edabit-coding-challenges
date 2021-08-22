"""
Return Last Item

Create a function that returns the last value of the last item in a list or string.

https://edabit.com/challenge/mcC546MLnBjNLXTb8
"""
from typing import Any, List, Union

ItemList = Union[List[Any], str]


def last_ind(lst: ItemList) -> Any:
    return lst[-1] if lst else None
