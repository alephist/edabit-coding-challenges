"""
Single Occurrence

Create a function that, given a string txt, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".

https://edabit.com/challenge/dQZmkrPaKdtSat5f9
"""


def single_occurence(txt: str) -> str:
    if not txt:
        return ""

    uppercase_txt = txt.upper()
    for letter in uppercase_txt:
        if uppercase_txt.count(letter) == 1:
            return letter
