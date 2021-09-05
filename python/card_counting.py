"""
Card Counting (BlackJack)

In BlackJack, cards are counted with -1, 0, 1 values:
2, 3, 4, 5, 6 are counted as +1
7, 8, 9 are counted as 0
10, J, Q, K, A are counted as -1

Create a function that counts the number and returns it from the list of cards provided.

https://edabit.com/challenge/hYiCzkLBBQSeF8fKF
"""
from typing import List, Union

Card = Union[int, str]
Deck = List[Card]


def get_card_value(card: Card) -> int:
    ones = [2, 3, 4, 5, 6]
    zeroes = [7, 8, 9]
    negative_ones = [10, 'J', 'Q', 'K', 'A']

    if card in ones:
        return 1
    elif card in zeroes:
        return 0
    elif card in negative_ones:
        return -1


def card_count(deck: Deck) -> int:
    return sum(get_card_value(card) for card in deck)
