import unittest

from typing import List, Tuple

from word_endings import add_ending

test_values: Tuple[Tuple[List[str], str, List[str]]] = (
    (['clever', 'meek', 'hurried', 'nice'], 'ly', [
     'cleverly', 'meekly', 'hurriedly', 'nicely']),
    (['new', 'pander', 'scoop'], 'er', ['newer', 'panderer', 'scooper']),
    (['bend', 'sharpen', 'mean'], 'ing', ['bending', 'sharpening', 'meaning']),
    (['bend', 'tooth', 'mint'], 'y', ['bendy', 'toothy', 'minty']),
    (['bend', 'tooth', 'mint'], 'ier', ['bendier', 'toothier', 'mintier'])
)


class WordEndingsTestCase(unittest.TestCase):
    def test_add_string_ending_to_each_item_in_list(self):
        for lst, ending, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(add_ending(lst, ending), expected_lst)


if __name__ == '__main__':
    unittest.main()
