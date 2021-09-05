"""
Get Sum of People's Budget

Create the function that takes a list of dictionaries and returns the sum of people's budgets.

https://edabit.com/challenge/ff2R7SymbB6PfjpPm
"""
from typing import Any, Dict, List

PersonList = List[Dict[str, Any]]


def get_budgets(lst: PersonList) -> int:
    return sum(person.get('budget') for person in lst)
