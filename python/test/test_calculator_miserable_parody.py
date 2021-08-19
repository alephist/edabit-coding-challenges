import unittest

from typing import Tuple

from calculator_miserable_parody import calculator

test_values: Tuple[Tuple[str, int]] = (
    ("23+4", 27),
    ("45-15", 30),
    ("13+2-5*2", 5),
    ("49/7*2-3", 11),
    ("2+2*2", 6),
    ("5/2", 2.5),
    ("-34/4", -8.5),
    ("0+43-0+56*0", 43),
    ("-14*2-37-0", -65),
    ("0*0", 0),
    ("4+2+3-5*2-8/4-12-0+3-14", -26),
    ("9/2+9/4", 6.75),
    ("56*27*18*12/2*0", 0),
    ("34/4*0*45*7", 0)
)


class CalculatorMiserableParodyTestCase(unittest.TestCase):
    def test_get_int_from_string_math_expression(self):
        for txt, expected in test_values:
            with self.subTest():
                self.assertEqual(calculator(txt), expected)


if __name__ == '__main__':
    unittest.main()
