"""
Classes For Fetching Information on a Sports Player

Create a class that takes the following four arguments for a particular football player:
name
age
height
weight

Also, create three functions for the class that returns the following strings:
get_age() returns "name is age age"
get_height() returns "name is heightcm"
get_weight() returns "name weighs weightkg"

https://edabit.com/challenge/pa65DgwG5HMbtf6iY
"""


class Player:
    def __init__(self, name: str, age: int, height: int, weight: int) -> None:
        self.name = name
        self.age = age
        self.height = height
        self.weight = weight

    def get_age(self) -> str:
        return f"{self.name} is age {self.age}"

    def get_height(self) -> str:
        return f"{self.name} is {self.height}cm"

    def get_weight(self) -> str:
        return f"{self.name} weighs {self.weight}kg"
