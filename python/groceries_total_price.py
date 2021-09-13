"""
Calculate the Total Price of Groceries

Create a function that takes a list of dictionaries (groceries) which calculates the total price and returns it as a number.

https://edabit.com/challenge/JcmSuBX2EaPfRkqZ8
"""
from typing import Dict, List, Union

GroceryList = List[Dict]
Number = Union[int, float]


def get_total_price(groceries: GroceryList) -> Number:
    total = sum(item['price'] * item['quantity'] for item in groceries)
    return round(total) if total.is_integer() else round(total, 1)
