"""
Make a Circle with OOP

Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

https://edabit.com/challenge/nC7iHBbN8FEPy2EJ2
"""
import math
from typing import Union

Number = Union[int, float]


class Circle:
    def __init__(self, radius: Number):
        self.radius = radius

    def get_area(self) -> Number:
        return math.pi * self.radius ** 2

    def get_perimeter(self) -> Number:
        return 2 * math.pi * self.radius
