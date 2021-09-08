"""
Reverse Words Starting With a Particular Letter

Write a function that reverses all the words in a sentence that start with a particular letter.

https://edabit.com/challenge/4Y5Zk5f9LckvWjFf3
"""


def special_reverse(s: str, c: str) -> str:
    word_list = [word[::-1]
                 if word.startswith(c) else word for word in s.split()]
    return " ".join(word_list)
