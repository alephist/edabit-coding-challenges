"""
Harshad Number

A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

https://edabit.com/challenge/eADRy5SA5QbasA3Qt
"""


def is_harshad(num: int) -> bool:
    digit_sum = sum(int(digit) for digit in str(num))
    return num % digit_sum == 0
