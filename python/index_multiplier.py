"""
Index Multiplier

Return the sum of all items in a list, where each item is multiplied by its index (zero-based). For empty lists, return 0.

https://edabit.com/challenge/82BssjYWrugBjRsux
"""
from typing import List


def index_multiplier(lst: List[int]) -> int:
    return sum(num * i for i, num in enumerate(lst))
