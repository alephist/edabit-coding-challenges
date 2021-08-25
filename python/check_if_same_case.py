"""
Check if the Same Case

Create a function that returns True if an input string contains only uppercase or only lowercase letters.

https://edabit.com/challenge/3XtrKPMbxAf86QjjS
"""


def same_case(txt: str) -> bool:
    return txt.isupper() or txt.islower()
