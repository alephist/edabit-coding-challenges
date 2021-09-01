"""
Potential Friend?

Given two sets of two people's different interests, return whether both people have at least two things in common or have exact interests. Return True if there's a potential friend!

https://edabit.com/challenge/urmGYQsn4neGSKaat
"""
from typing import Set


def is_potential_friend(set1: Set[str], set2: Set[str]) -> bool:
    return len(set1 & set2) >= 2 or set1 == set2
