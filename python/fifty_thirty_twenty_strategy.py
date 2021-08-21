"""
50-30-20 Strategy

The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

Given the after-tax income as ati, what you are supposed to do is to make a function that will return a dictionary that shows how much a person needs to spend on needs, wants, and savings.

https://edabit.com/challenge/MSjfXQ4gvMzeezFgB
"""
from typing import Dict


def fifty_thirty_twenty(ati: int) -> Dict[str, int]:
    budget_summary = {}
    budget_summary['Needs'] = ati * 0.5
    budget_summary['Wants'] = ati * 0.3
    budget_summary['Savings'] = ati * 0.2

    return budget_summary
