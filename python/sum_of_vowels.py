"""
Sum of v0w3ls

Create a function that takes a string and returns the sum of vowels, where some vowels are considered numbers.

Vowel	Number
A	4
E	3
I	1
O	0
U	0

https://edabit.com/challenge/6NoaFGKJgRW6oXhLC
"""


def sum_of_vowels(sentence: str) -> int:
    vowel_dict = {
        'a': 4,
        'e': 3,
        'i': 1,
        'o': 0,
        'u': 0
    }
    return sum(vowel_dict.get(letter, 0) for letter in sentence.lower())
