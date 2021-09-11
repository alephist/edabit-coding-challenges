"""
Fullname and Email

Create the instance attributes fullname and email in the Employee class. Given a person's first and last names:
1. Form the fullname by simply joining the first and last name together, separated by a space.
2. Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.

https://edabit.com/challenge/gB7nt6WzZy8TymCah
"""


class Employee:
    def __init__(self, firstname: str, lastname: str) -> None:
        self.__firstname = firstname
        self.__lastname = lastname

    @property
    def firstname(self):
        return self.__firstname

    @property
    def lastname(self):
        return self.__lastname

    @property
    def fullname(self):
        return f"{self.__firstname} {self.__lastname}"

    @property
    def email(self):
        return f"{self.__firstname}.{self.__lastname}@company.com".lower()
