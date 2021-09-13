"""
Get Student Top Notes

Create a function that takes a list of student dictionaries and returns a list of their top notes. If the student does not have notes then let's assume their top note is equal to 0.

https://edabit.com/challenge/jt8XTr75xxowgi6KM
"""
from typing import Dict, List


def get_student_top_notes(students: List[Dict]) -> List[int]:
    return [0 if not student['notes'] else max(student['notes']) for student in students]
