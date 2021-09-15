"""
Filtering by Star Rating

Given a dictionary of some items with star ratings and a specified star rating, return a new dictionary of items which match the specified star rating. Return "No results found" if no item matches the star rating given.

https://edabit.com/challenge/qM6zWQM7gdfPgE9Hh
"""
from typing import Dict, Union


def filter_by_rating(d: Dict[str, str], rating: str) -> Union[Dict[str, str], str]:
    filtered_dict = {}
    for key, value in d.items():
        if value == rating:
            filtered_dict[key] = value
    if not filtered_dict:
        return "No results found"
    return filtered_dict
