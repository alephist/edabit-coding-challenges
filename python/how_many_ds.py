"""
How Many D's Are There?

Create a function that counts how many D's are in a sentence.

https://edabit.com/challenge/xdSKkXQkkMroNzq8C
"""


def count_d(sentence: str) -> int:
    return sentence.lower().count('d')
