"""
What's My Golf Score?

A standard-sized golf course has 18 holes. Each hole is given a par, which is the expected number of strokes (hits) that a good player would use to complete a hole. Golf also uses different terms for a player being over/under par for a particular hole:

"eagle" = 2 under par (-2)
"birdie" = 1 under par (-1)
"bogey" = 1 over par (+1)
"double-bogey" = 2 over par (+2)

Example scores:

"birdie" on a par 3 hole = 2
"eagle" on a par 5 hole = 3
"par" on a par 3 hole = 3
"bogey" on a par 4 hole = 5

Given a list of pars for an 18-hole golf course, and another list containing the player result for each hole, return the total score for the round of golf.

https://edabit.com/challenge/wZzZ9NtugwsnQEQeM
"""
from typing import List


def golf_score(course: List[int], result: List[str]) -> int:
    score_dict = {
        'eagle': -2,
        'birdie': -1,
        'par': 0,
        'bogey': 1,
        'double-bogey': 2
    }
    total_score = 0
    for par, score in zip(course, result):
        total_score += par + score_dict[score]
    return total_score
