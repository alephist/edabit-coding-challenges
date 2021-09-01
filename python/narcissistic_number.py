"""
Narcissistic Number

A Narcissistic Number is a number that is the sum of its own digits each raised to the power of the number of digits.

For example, take 153 (3 digits), which is narcisstic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

1652 (4 digits), is non-narcisstic:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

Create a function which returns True or False depending upon whether the given number n is a Narcissistic number or not.

https://edabit.com/challenge/2wJrWniq8yz79Yvgv
"""


def is_narcissistic(n: int) -> bool:
    num_list = [int(x) for x in str(n)]
    return sum(i ** len(num_list) for i in num_list) == n
