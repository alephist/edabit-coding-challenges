"""
Same ASCII?

Return True if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return False.

https://edabit.com/challenge/mwNDWczpQ5bm7vLKk
"""


def get_ascii_sum(string: str) -> int:
    return sum(ord(char) for char in string)


def same_ascii(a: str, b: str) -> bool:
    return get_ascii_sum(a) == get_ascii_sum(b)
