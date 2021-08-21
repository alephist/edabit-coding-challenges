"""
Is the Last Character an "N"?

Create a function that takes a string (a random name). If the last character of the name is an "n", return True, otherwise return False.

https://edabit.com/challenge/8rXfBzRZbgZP7mzyR
"""


def is_last_character_n(word: str) -> bool:
    return word.endswith('n')
