"""
Online Shopping

Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

https://edabit.com/challenge/8SBG29RYLwTbGxn7T
"""
from typing import Dict

OrderItem = Dict[str, float]


def free_shipping(order: OrderItem) -> bool:
    return sum(price for price in order.values()) > 50
