import unittest

from typing import List, Tuple

from sweetest_ice_cream import IceCream, sweetest_ice_cream

ice1 = IceCream("Chocolate", 13)
ice2 = IceCream("Vanilla", 0)
ice3 = IceCream("Strawberry", 7)
ice4 = IceCream("Plain", 18)
ice5 = IceCream("ChocolateChip", 3)
ice6 = IceCream("Chocolate", 23)
ice7 = IceCream("Strawberry", 0)
ice8 = IceCream("Plain", 34)
ice9 = IceCream("Plain", 81)
ice10 = IceCream("Vanilla", 12)

test_values: Tuple[Tuple[List[IceCream], int]] = (
    ([ice1, ice2, ice3, ice4, ice5], 23),
    ([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2], 34),
    ([ice10, ice10, ice6, ice8, ice4], 34),
    ([ice2, ice10, ice6, ice9, ice7], 81),
    ([ice10, ice6, ice4, ice1, ice7, ice8, ice6], 34),
    ([ice3, ice1], 23),
    ([ice6, ice7, ice5, ice4, ice3], 33),
    ([ice4, ice8, ice9], 81),
    ([ice5, ice7], 10),
    ([ice5, ice3, ice6, ice2, ice7, ice2, ice7, ice2], 33),
    ([ice1, ice9, ice10, ice9, ice7, ice1, ice9], 81),
    ([ice1, ice4], 23),
    ([ice7, ice4], 18),
    ([ice1, ice8, ice6, ice7, ice3, ice2, ice3, ice7], 34),
    ([ice7, ice8, ice4, ice4, ice5, ice1], 34),
    ([ice10, ice10, ice9, ice4, ice7, ice9], 81),
    ([ice3, ice10, ice1], 23),
    ([ice3, ice4, ice7, ice3, ice7, ice10, ice2], 18),
    ([ice5, ice9, ice9, ice9, ice7, ice5, ice9, ice7], 81),
    ([ice4, ice9, ice2], 81),
    ([ice8, ice2, ice2, ice2, ice4, ice8], 34),
    ([ice4, ice9, ice4, ice3, ice3, ice2, ice5, ice2], 81),
    ([ice8, ice10, ice5], 34),
    ([ice10, ice3, ice2, ice1, ice9], 81),
    ([ice8, ice3, ice4, ice5], 34),
    ([ice10, ice8, ice6, ice7, ice9, ice4], 81),
    ([ice5, ice4, ice6, ice6, ice1], 33),
    ([ice6, ice8, ice2, ice10, ice7, ice10], 34),
    ([ice1, ice9, ice7, ice3], 81),
    ([ice7, ice1, ice9, ice6, ice7, ice10, ice2, ice3], 81),
    ([ice5, ice1, ice7, ice6, ice8, ice1, ice8], 34),
    ([ice10, ice9, ice2, ice4, ice10], 81),
    ([ice3, ice7, ice10], 17),
    ([ice10, ice5, ice4], 18),
    ([ice9, ice2, ice4, ice8, ice3, ice3], 81),
    ([ice6, ice3, ice9, ice8, ice2, ice6], 81),
    ([ice10, ice3], 17),
    ([ice10, ice7, ice5, ice2, ice9], 81),
    ([ice10, ice10, ice4, ice1, ice9], 81),
    ([ice9, ice2, ice6, ice4, ice10, ice3], 81),
    ([ice8, ice10, ice1, ice7, ice8, ice9, ice1], 81),
    ([ice7, ice5, ice3, ice8, ice1, ice9], 81),
    ([ice2, ice6, ice3], 33),
    ([ice6, ice6], 33),
    ([ice9, ice6, ice8, ice3, ice2, ice2], 81),
    ([ice1, ice3, ice3, ice6], 33),
    ([ice8, ice6], 34),
    ([ice1, ice1], 23),
    ([ice4, ice2, ice3, ice9, ice5, ice10, ice6], 81),
    ([ice10, ice8, ice4, ice3, ice9, ice8, ice1, ice10], 81),
    ([ice5, ice8, ice5], 34)
)


class SweetestIceCreamTestCase(unittest.TestCase):
    def test_return_the_sweetness_value_of_the_sweetest_ice_cream(self):
        for lst, expected_value in test_values:
            with self.subTest():
                self.assertEqual(sweetest_ice_cream(lst), expected_value)


if __name__ == '__main__':
    unittest.main()
