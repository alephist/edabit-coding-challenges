"""
Perfect Square Patch

Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

https://edabit.com/challenge/K3qMssK6mF34ctXE5
"""
from typing import List


def square_patch(n: int) -> List[List[int]]:
    return [[n for _ in range(n)] for _ in range(n)]
