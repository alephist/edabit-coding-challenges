"""
No Hidden Fees

Given a list of prices prices and a "supposed" total t, return True if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return False.

Notes:
Remember that each price is given as a string.
All $ signs will be at the beginning of the number.

https://edabit.com/challenge/vsBznidKiKA96gp2J
"""
from typing import List


def has_hidden_fee(prices: List[str], t: str) -> bool:
    total_price = sum(int(price.strip('$')) for price in prices)
    return int(t.strip('$')) > total_price
