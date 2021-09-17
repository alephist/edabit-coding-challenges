"""
Names, Ages and Occupations

Write a function that maps a string into a dictionary of name, string, and occupation pairs.

https://edabit.com/challenge/7nfSdzzpvTta8hhNe
"""
from typing import Dict


def organize(txt: str) -> Dict[str, str]:
    if not txt:
        return {}
    name, age, occupation, *_ = txt.split(', ')
    return {'name': name, 'age': int(age), 'occupation': occupation}
