import unittest

from typing import Tuple

from good_name import name_score

test_values: Tuple[Tuple[str, str]] = (
    ('MUBASHIR', "THE BEST"),
    ('MATT', "THE BEST"),
    ('PAKISTAN', "THE BEST"),
    ('AIRFORCE', "THE BEST"),
    ('GUV', 'NOT TOO GOOD'),
    ('PUBG', "NOT TOO GOOD"),
    ('ME', "PRETTY GOOD"),
    ('BOB', "PRETTY GOOD"),
    ('JLJ', 'PRETTY GOOD'),
    ('YOU', 'VERY GOOD'),
    ('FABIO', "VERY GOOD"),
    ('ROBBY', 'THE BEST'),
    ('BILL GATES', "THE BEST")
)


class GoodNameTestCase(unittest.TestCase):
    def test_add_all_letters_from_name_to_get_score_rating(self):
        for name, expected_rating in test_values:
            with self.subTest():
                self.assertEqual(name_score(name), expected_rating)


if __name__ == '__main__':
    unittest.main()
