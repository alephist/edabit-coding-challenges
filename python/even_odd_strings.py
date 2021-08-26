"""
Even and Odd Strings

Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

https://edabit.com/challenge/M3oq3s8T7Nz7piBvc
"""


def even_odd_string(txt: str) -> str:
    odd_indexed_letters = "".join(
        letter for i, letter in enumerate(txt) if i % 2 != 0)

    even_indexed_letters = "".join(
        letter for i, letter in enumerate(txt) if i % 2 == 0)

    return " ".join([even_indexed_letters, odd_indexed_letters])
