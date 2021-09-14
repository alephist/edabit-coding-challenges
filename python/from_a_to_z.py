"""
From A to Z

Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the range is given in capital letters, return the string in capitals also!

https://edabit.com/challenge/Abo5qakEcntamMZ8p
"""


def gimme_the_letters(spectrum: str) -> str:
    start, end = spectrum.split('-')
    return "".join(chr(i) for i in range(ord(start), ord(end) + 1))
