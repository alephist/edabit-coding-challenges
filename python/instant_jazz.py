"""
Instant JAZZ

Create a function which concantenates the number 7 to the end of every chord in a list. Ignore all chords which already end with 7.

https://edabit.com/challenge/jhghtvT2s58FnDr5T
"""
from typing import List


def jazzify(lst: List[str]) -> List[str]:
    return [f"{chord}7" if not chord.endswith('7') else chord for chord in lst]
