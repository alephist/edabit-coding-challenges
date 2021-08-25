"""
Assign Person to Occupation

You have two lists. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create a dictionary displaying each person to their respective occupation.

https://edabit.com/challenge/XPnTdP9eDkwqAQeWq
"""
from typing import Dict, List

StrList = List[str]


def assign_person_to_job(names: StrList, jobs: StrList) -> Dict[str, str]:
    return {name: job for name, job in zip(names, jobs)}
