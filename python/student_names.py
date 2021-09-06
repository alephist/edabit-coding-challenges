"""
Get Student Names

Create a function that takes a dictionary of student names and returns a list of student names in alphabetical order.

https://edabit.com/challenge/HvkPdhijquecKASdF
"""
from typing import Dict, List


def get_student_names(students: Dict[str, str]) -> List[str]:
    return sorted(students.values())
