import unittest

from typing import Tuple

from reverse_the_case import reverse_case

test_values: Tuple[Tuple[str, str]] = (
    ('Happy Birthday', 'hAPPY bIRTHDAY'),
    ('MANY THANKS', 'many thanks'),
    ('sPoNtAnEoUs', 'SpOnTaNeOuS'),
    ('eXCELLENT, yOuR mAJESTY', 'Excellent, YoUr Majesty')
)


class ReverseTheCaseTestCase(unittest.TestCase):
    def test_reverse_the_case_of_each_letter_in_input_txt(self):
        for txt, expected_str in test_values:
            with self.subTest():
                self.assertEqual(reverse_case(txt), expected_str)


if __name__ == '__main__':
    unittest.main()
