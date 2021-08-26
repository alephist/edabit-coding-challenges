import unittest

from typing import Tuple

from even_odd_strings import even_odd_string

test_values: Tuple[Tuple[str, str]] = (
    ("mubashir", "mbsi uahr"),
    ("edabit", "eai dbt"),
    ("airforce", "aroc ifre"),
    ("Wolfeschlegelsteinhausenbergerdorff",
     "Wleclgltihuebredrf ofsheesenasnegrof"),
    ("METHIONYLTHREONYLTHREONYGLUTAMINYLARGINYL",
     "MTINLHENLHENGUAIYAGNL EHOYTROYTROYLTMNLRIY"),
    ("PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS",
     "PEMNUTAIRSOISLCVLAOOISS NUOOLRMCOCPCIIOOCNCNOI"),
    ("PSEUDOPSEUDOHYPOPARATHYROIDISM", "PEDPEDHPPRTYODS SUOSUOYOAAHRIIM"),
    ("FLOCCINAUCINIHILIPILIFICATION", "FOCNUIIIIIIIAIN LCIACNHLPLFCTO"),
    ("SUBDERMATOGLYPHIC", "SBEMTGYHC UDRAOLPI")
)


class EvenOddStringsTestCase(unittest.TestCase):
    def test_group_odd_indexed_letters_and_even_indexed_letter_then_combine_into_one_string(self):
        for txt, expected_str in test_values:
            with self.subTest():
                self.assertEqual(even_odd_string(txt), expected_str)


if __name__ == '__main__':
    unittest.main()
