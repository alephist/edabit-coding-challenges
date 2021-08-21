"""
I'd Like a New Shade of Blue, Please

I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

n is the number of square meters I can paint.
w and h are the widths and heights of a single wall in meters.

https://edabit.com/challenge/7ECZC8CBEhy5QkvN3
"""


def how_many_walls(n: int, w: int, h: int) -> int:
    area_per_wall = w * h
    return n // area_per_wall if n >= area_per_wall else 0
