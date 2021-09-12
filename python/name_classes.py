"""
Name Classes

Write a class called Name and create the following attributes given a first name and last name (as fname and lname):
An attribute called fullname which returns the first and last names.
A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.

Remember to allow the attributes fname and lname to be accessed individually as well.

https://edabit.com/challenge/kbtju9wk5pjGYMmHF
"""


class Name:
    def __init__(self, fname: str, lname: str) -> None:
        self.__fname = fname
        self.__lname = lname

    @property
    def fname(self) -> str:
        return self.__fname.title()

    @property
    def lname(self) -> str:
        return self.__lname.title()

    @property
    def fullname(self) -> str:
        return f"{self.fname} {self.lname}"

    @property
    def initials(self) -> str:
        return f"{self.fname[0]}.{self.lname[0]}"
