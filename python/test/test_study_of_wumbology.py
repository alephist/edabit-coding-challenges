import unittest

from typing import Tuple

from study_of_wumbology import wumbo

test_values: Tuple[Tuple[str, str]] = (
    ("WHAT DO YOU MEAN WE'RE OUT OF MONEY", "WHAT DO YOU WEAN WE'RE OUT OF WONEY"),
    ("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCDEFGHIJKLWNOPQRSTUVWXYZ"),
    ("1 WUMBO 2 WUMBO 3 WUMBO 4", "1 WUWBO 2 WUWBO 3 WUWBO 4")
)


class StudyOfWumbologyTestCase(unittest.TestCase):
    def test_replace_all_M_with_W(self):
        for txt, expected in test_values:
            with self.subTest():
                self.assertEqual(wumbo(txt), expected)


if __name__ == '__main__':
    unittest.main()
