"""
Invert Keys and Values

Write a function that inverts the keys and values of a dictionary.

https://edabit.com/challenge/Axim3Ld5zu9RFLZKr
"""
from typing import Dict


def invert(dct: Dict) -> Dict:
    return {value: key for key, value in dct.items()}
