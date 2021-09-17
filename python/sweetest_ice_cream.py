"""
The Sweetest Ice Cream

Create a function which takes a list of objects from the class IceCream and returns the sweetness value of the sweetest icecream.

Each sprinkle has a sweetness value of 1
Check below for the sweetness values of the different flavors.

Flavors	Sweetness Value
Plain	0
Vanilla	5
ChocolateChip	5
Strawberry	10
Chocolate	10

https://edabit.com/challenge/uerTkWm9K3oMtMZKz
"""
from typing import List


class IceCream:
    def __init__(self, flavor: str, num_sprinkles: int) -> None:
        self.__flavor = flavor
        self.__num_sprinkles = num_sprinkles

    @property
    def flavor(self) -> str:
        return self.__flavor

    @property
    def num_sprinkles(self) -> int:
        return self.__num_sprinkles


def sweetest_ice_cream(lst: List[IceCream]) -> int:
    flavor_sweetness = {
        'Plain': 0,
        'Vanilla': 5,
        'ChocolateChip': 5,
        'Strawberry': 10,
        'Chocolate': 10
    }
    return max(flavor_sweetness[ice_cream.flavor] + ice_cream.num_sprinkles for ice_cream in lst)
