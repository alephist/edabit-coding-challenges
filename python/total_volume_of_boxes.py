"""
Total Volume of All Boxes

Given a list of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by a list with three elements: length, width and height.

https://edabit.com/challenge/tNFTY9ggpTkeHvBaN
"""
from typing import List

Box = List[str]


def total_volume(*boxes: Box) -> int:
    return sum(l * w * h for l, w, h in boxes)
