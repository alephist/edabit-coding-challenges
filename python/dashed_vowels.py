"""
Dashed Vowels

Create a function that takes a string and returns dashes on both sides of every vowel (a e i o u).

https://edabit.com/challenge/WsGjnhMdjsvzyuk5q
"""


def dashed(txt: str) -> str:
    char_list = [
        f"-{char}-" if char.lower() in 'aeiou' else char for char in txt]
    return "".join(char for char in char_list)
