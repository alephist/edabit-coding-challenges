import unittest

from typing import List, Tuple

from find_the_index import find_index

test_values: Tuple[Tuple[List[str], str, int]] = (
    (['ght', 'edabit', 'testcase', 'hello'], 'testcase', 2),
    (['HfjhB', 'Ok', 'smile', '12345'], '12345', 3),
    (['a', 'b', 'c', 'd', 'e', 'f'], 'f', 5)
)


class FindTheIndexTestCase(unittest.TestCase):
    def test_return_index_of_input_string_in_list(self):
        for lst, txt, expected in test_values:
            with self.subTest():
                self.assertEqual(find_index(lst, txt), expected)


if __name__ == '__main__':
    unittest.main()
