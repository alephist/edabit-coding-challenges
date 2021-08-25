"""
N Tables + 1

Create a function that takes a number num and returns the first 10 multiples of num with 1 added to it, separated by commas.

https://edabit.com/challenge/aQWEQDoWiNbryG8xs
"""


def n_tables_plus_one(num: int) -> str:
    first_ten_multiples_of_num = [str((i * num) + 1) for i in range(1, 11)]
    return ",".join(first_ten_multiples_of_num)
