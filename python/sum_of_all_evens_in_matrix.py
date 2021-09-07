"""
Sum of all Evens in a Matrix

Create a function that returns the sum of all even elements in a 2D matrix.

https://edabit.com/challenge/MbPpxYWMRihFeaNPB
"""
from typing import List

Vector = List[int]
Matrix = List[Vector]


def sum_of_evens(lst: Matrix) -> int:
    return sum(num for vector in lst for num in vector if num % 2 == 0)
