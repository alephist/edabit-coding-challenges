"""
Perfect Number

Create a function that tests whether or not an integer is a perfect number. A perfect number is a number that can be written as the sum of its factors, excluding the number itself.

For example, 6 is a perfect number, since 1 + 2 + 3 = 6, where 1, 2, and 3 are all factors of 6. Similarly, 28 is a perfect number, since 1 + 2 + 4 + 7 + 14 = 28.

https://edabit.com/challenge/FJ8SmixDM6z3epzGy
"""


def check_perfect(num: int) -> bool:
    sum_of_factors = sum(i for i in range(1, num) if num % i == 0)
    return sum_of_factors == num
