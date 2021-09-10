"""
YouTube Upload Count

You are given a list of dates in the format Dec 11 and a month in the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

https://edabit.com/challenge/wPMgjmQMoCwm3G6mt
"""
from typing import List


def upload_count(dates: List[str], month: str) -> int:
    return sum(date.count(month) for date in dates)
