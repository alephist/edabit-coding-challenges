"""
Count Number of Instances

Create a class named User and create a way to check the number of users (number of instances) were created, so that the value can be accessed as a class attribute.

https://edabit.com/challenge/rprukfcGWqnvKZR9g
"""


class User:
    user_count = 0

    def __init__(self, username: str) -> None:
        self.__username = username
        User.user_count += 1

    @property
    def username(self):
        return self.__username
