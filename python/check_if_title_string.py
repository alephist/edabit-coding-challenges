"""
Check If It's a Title String

Check if a string txt is a title text or not. A title text is one which has all the words in the text start with an upper case letter.

https://edabit.com/challenge/CHwX2o6rqrBsL4gzr
"""


def check_title(txt: str) -> bool:
    return txt == txt.title()
