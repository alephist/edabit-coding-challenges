import unittest

from typing import Tuple

from repeat_letters_n_times import repeat

test_values: Tuple[Tuple[str, int, str]] = (
    ("mice", 5, "mmmmmiiiiiccccceeeee"),
    ("hello", 3, "hhheeellllllooo"),
    ("stop", 1, "stop"),
    ("tomato", 2, "ttoommaattoo")
)


class RepeatLettersNTimesTestCase(unittest.TestCase):
    def test_repeat_each_character_in_a_string_n_times(self):
        for txt, n, expected_str in test_values:
            with self.subTest():
                self.assertEqual(repeat(txt, n), expected_str)


if __name__ == '__main__':
    unittest.main()
