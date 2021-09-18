"""
Calculate the Profit

You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given a dictionary containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.

https://edabit.com/challenge/YfoKQWNeYETb9PYpw
"""
from typing import Dict, Union


def profit(info: Dict[str, Union[int, float]]) -> int:
    profit_per_unit = info['sell_price'] - info['cost_price']
    return round(info['inventory'] * profit_per_unit)
