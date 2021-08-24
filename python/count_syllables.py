"""
Count Syllables

Create a function that counts the number of syllables a word has. Each syllable is separated with a dash (-).

https://edabit.com/challenge/RejGBWcKsKM2PANip
"""


def number_syllables(word: str) -> int:
    return len(word.split("-"))
