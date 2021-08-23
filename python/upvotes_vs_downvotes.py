"""
Upvotes vs Downvotes

Given a dictionary containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

https://edabit.com/challenge/SFE4q5pFTi8TBwj76
"""
from typing import Dict


def get_vote_count(votes: Dict[str, int]) -> int:
    return votes['upvotes'] - votes['downvotes']
