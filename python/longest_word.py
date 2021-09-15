"""
Longest Word

Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word. Characters such as apostophe, comma, period (and the like) count as part of the word (e.g. O'Connor is 8 characters long).

https://edabit.com/challenge/Aw2QK8vHY7Xk8Keto
"""


def longest_word(sentence: str) -> str:
    return max(sentence.split(), key=len)
