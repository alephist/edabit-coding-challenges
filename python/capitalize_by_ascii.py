"""
Capitalize by ASCII

Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

https://edabit.com/challenge/p94KFBXAzJ3ZxmFmw
"""


def ascii_capitalize(txt: str) -> str:
    char_list = [char.upper() if ord(char) % 2 == 0 else char.lower()
                 for char in txt]
    return "".join(char_list)
