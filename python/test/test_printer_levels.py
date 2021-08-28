import unittest

from typing import Dict, Tuple

from printer_levels import ink_levels

test_values: Tuple[Tuple[Dict[str, int], int]] = (
    ({"cyan": 23, "magenta": 12, "yellow": 10}, 10),
    ({"cyan": 432, "magenta": 543, "yellow": 777}, 432),
    ({"cyan": 700, "magenta": 700, "yellow": 0}, 0),
    ({"cyan": 70, "magenta": 700, "yellow": 1}, 1),
    ({"cyan": 6543, "magenta": 74543, "yellow": 2345678}, 6543),
    ({"cyan": 1, "magenta": 1, "yellow": 1}, 1),
    ({"cyan": 700, "magenta": 700, "yellow": 700}, 700)
)


class PrinterLevelsTestCase(unittest.TestCase):
    def test_return_max_number_of_pages_that_can_be_printed_based_on_ink_levels(self):
        for inks, expected_pages in test_values:
            with self.subTest():
                self.assertEqual(ink_levels(inks), expected_pages)


if __name__ == '__main__':
    unittest.main()
