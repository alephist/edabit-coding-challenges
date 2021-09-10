"""
Who's The Oldest?

Given a dictionary containing the names and ages of a group of people, return the name of the oldest person.

https://edabit.com/challenge/3A6x5GjWmT4t8pssL
"""
from typing import Dict


def oldest(people: Dict[str, int]) -> str:
    return max(people, key=people.get)
