"""
Frequency Distribution

Create a function that returns the frequency distribution of a list. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

https://edabit.com/challenge/KKmM4ob5wwPwf8kgS
"""
from collections import Counter
from typing import Dict, List


def get_frequencies(lst: List) -> Dict:
    return dict(Counter(lst))
