"""
Find the Falsehoods

Python will interpret empty values (e.g. 0, (), {}, [], "") as the boolean False. For example, the code "cat" if () else "dog" returns "dog", since () is False.

On the other hand, non-empty values are interpreted as True. For example, "cat" if (3, 2) else "dog" returns "cat" since (3, 2) is True.

Write a function that, given a list of values, returns the list of the values that are False.

https://edabit.com/challenge/sEChDwmcHvWcMSmRM
"""
from typing import Any, List


def find_the_falsehoods(lst: List[Any]) -> List[Any]:
    return [item for item in lst if not item]
