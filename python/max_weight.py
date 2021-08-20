"""
Maximum Weight Allowed

Create a function that returns True if the combined weight of a car car and the weight of the passengers p in the car is less than the maximum weight max_weight the car is allowed to carry. Otherwise, return False. The weight of the car and the weight of the passengers are given in pounds. The maximum weight is given in kilograms. 1 pound = 0.453592 kilogram

https://edabit.com/challenge/Fej5HSzcvHMdm2i4N
"""
from typing import List


def weight_allowed(car: int, p: List[int], max_weight: int) -> bool:
    max_weight_kilos = max_weight // 0.453592
    total_passenger_weight = sum(p)
    return car + total_passenger_weight < max_weight_kilos
