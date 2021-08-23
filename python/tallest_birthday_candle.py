"""
Tallest Birthday Cake Candles

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

https://edabit.com/challenge/PtrPzWCWrPW54xfxK
"""
from typing import List


def birthday_cake_candles(candles: List[int]) -> int:
    max_height = max(candles)
    return len([height for height in candles if height == max_height])
