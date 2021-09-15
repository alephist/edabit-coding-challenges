"""
Replace Letters With Position In Alphabet

Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. "a" is 1, "b" is 2, "c" is 3, etc, etc.

https://edabit.com/challenge/Bm3JCT6rFrnAhHohy
"""


def alphabet_index(txt: str) -> str:
    alphabet_index_list = [
        ord(char) - 96 for char in txt.lower() if char.isalpha()]
    return " ".join(str(i) for i in alphabet_index_list)
