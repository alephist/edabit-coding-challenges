"""
Is the String a Palindrome?

A palindrome is a word that is identical forward and backwards. Given a word, create a function that checks whether it is a palindrome.

https://edabit.com/challenge/TcKJTwwo9PvwLNHYT
"""


def is_palindrome(txt: str) -> bool:
    return txt[::-1] == txt
