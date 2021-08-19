"""
Is the Word Singular or Plural?

Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

https://edabit.com/challenge/jozLzME3YptxydiQm
"""


def is_plural(word: str) -> bool:
    return word.endswith("s")
