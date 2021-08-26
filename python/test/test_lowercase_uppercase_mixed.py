import unittest

from typing import Tuple

from lowercase_uppercase_mixed import get_case

test_values: Tuple[Tuple[str, str]] = (
    ("whisper...", "lower"),
    ("SHOUT!", "upper"),
    ("Indoor Voice", "mixed"),
    ("324324Indoor66453546Voice434", "mixed"),
    ("!!!!SHOUT!!!!", "upper"),
    ("......313whisper2131232...", "lower"),
)


class LowercaseUppercaseMixedTestCase(unittest.TestCase):
    def test_return_case_of_input_text(self):
        for txt, expected_case in test_values:
            with self.subTest():
                self.assertEqual(get_case(txt), expected_case)


if __name__ == '__main__':
    unittest.main()
