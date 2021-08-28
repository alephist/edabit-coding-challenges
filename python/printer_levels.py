"""
Printer Levels

Given a dictionary of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

https://edabit.com/challenge/S7rcHsS52JJNXknTS
"""
from typing import Dict


def ink_levels(inks: Dict[str, int]) -> int:
    return min(inks.values())
