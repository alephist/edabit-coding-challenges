"""
Expensive Orders

Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

https://edabit.com/challenge/J6riiW5W6GMYQfCpb
"""
from typing import Dict


def expensive_orders(orders: Dict[str, int], cost: int) -> Dict[str, int]:
    return {key: value for key, value in orders.items() if value > cost}
