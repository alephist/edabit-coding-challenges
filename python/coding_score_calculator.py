"""
Coding Website Score Calculator

Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points.

Create a function that takes the amount of challenges a user has completed for each challenge level, and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.

https://edabit.com/challenge/pzXrBSiQdMqvRWazp
"""
from typing import Union


def score_calculator(easy: int, med: int, hard: int) -> Union[int, str]:
    if any(num for num in (easy, med, hard) if num < 0):
        return 'invalid'

    return sum(completed_challenge * points for completed_challenge, points in ((easy, 5), (med, 10), (hard, 20)))
