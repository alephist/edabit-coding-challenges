"""
Area of a Rectangle

Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

https://edabit.com/challenge/EPS5tFxKQB7vWXLs6
"""


def area(h: int, w: int) -> int:
    any_dimension_is_less_than_or_equal_zero: bool = h <= 0 or w <= 0

    if any_dimension_is_less_than_or_equal_zero:
        return -1

    return h * w
