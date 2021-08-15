"""
Maximum Edge of a Triangle

Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

https://edabit.com/challenge/Zerwo2AENbvRZTe83
"""


def get_next_edge(side_1, side_2):
    return (side_1 + side_2) - 1
