"""
Numbers to Dictionaries

Given a list of numbers lst:

Create an dictionary for each given number.
The dictionary key will be the number converted string.
The value will be the corresponding character code converted string (check ASCII table).
Return a list of the resulting dictionaries.

https://edabit.com/challenge/gKQ9E956yQujqSTZw
"""
from typing import Dict, List


def num_to_dict(lst: List[int]) -> List[Dict[str, str]]:
    dict_list = []
    for num in lst:
        num_dict = {}
        num_dict[str(num)] = chr(num)
        dict_list.append(num_dict)

    return dict_list
