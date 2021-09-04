"""
Spelling it Out

Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

https://edabit.com/challenge/D69v5RSgzFPqsyfwf
"""
from typing import List


def spelling(txt: str) -> List[str]:
    return [txt[:i] for i in range(1, len(txt) + 1)]
