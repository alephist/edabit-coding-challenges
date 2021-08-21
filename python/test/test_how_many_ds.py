import unittest

from typing import Tuple

from how_many_ds import count_d

test_values: Tuple[Tuple[str, int]] = (
    ("My friend Dylan got distracted at school", 4),
    ("Debris was scattered all over the place.", 2),
    ("The rodents hibernated in their den.", 3)
)


class HowManyDsTestCase(unittest.TestCase):
    def test_count_number_of_ds_in_a_string(self):
        for sentence, d_count in test_values:
            with self.subTest():
                self.assertEqual(count_d(sentence), d_count)


if __name__ == '__main__':
    unittest.main()
