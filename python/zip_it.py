"""
Zip It, If You Can?

Given a list of women and a list of men, either:

Return "sizes don't match" if the two lists have different sizes.
If the sizes match, return a list of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

https://edabit.com/challenge/BxKT4agPnm9ZNpDru
"""
from typing import List, Tuple, Union

ListPair = List[Tuple[str, str]]


def zip_it(women: List[str], men: List[str]) -> Union[ListPair, str]:
    return list(zip(women, men)) if len(women) == len(men) else "sizes don't match"
