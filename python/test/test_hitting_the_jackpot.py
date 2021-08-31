import unittest

from typing import List, Tuple

from hitting_the_jackpot import test_jackpot

test_values: Tuple[Tuple[List[str], bool]] = (
    (['@', '@', '@', '@'], True),
    (['!', '!', '!', '!'], True),
    (['abc', 'abc', 'abc', 'abc'], True),
    (['karaoke', 'karaoke', 'karaoke', 'karaoke'], True),
    (['SS', 'SS', 'SS', 'SS'], True),
    ([':(', ':)', ':|', ':|'], False),
    (['&&', '&', '&&&', '&&&&'], False),
    (['hee', 'heh', 'heh', 'heh'], False),
    (['SS', 'SS', 'SS', 'Ss'], False)
)


class HittingTheJackpotTestCase(unittest.TestCase):
    def test_check_if_all_elements_are_identical(self):
        for result, expected_outcome in test_values:
            with self.subTest():
                self.assertEqual(test_jackpot(result), expected_outcome)


if __name__ == '__main__':
    unittest.main()
