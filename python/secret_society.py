"""
Secret Society

A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in a list of names and returns the name of the secret society.

https://edabit.com/challenge/m9bcZKy4niMmsg3JX
"""
from typing import List

Friends = List[str]


def society_name(friends: Friends) -> str:
    return "".join(friend[0] for friend in sorted(friends))
