import unittest

from return_last_item import get_last_item

test_values = (
    (['Cat', 'Dog', 'Duck'], 'Duck'),
    ([1, 2, 3], 3),
    ([True, False, False, True], True),
    ([7, 'String', False], False),
    ([False], False),
    ([1, 2, 3, 56, 87, 23, 65, 45], 45),
    (['Apple', 'Orange'], 'Orange'),
    ([True, False, 'Apple'], 'Apple'),
    ([1], 1)
)


class ReturnLastItemTestCase(unittest.TestCase):
    def test_return_last_item_from_list(self):
        for lst, item in test_values:
            with self.subTest():
                self.assertEqual(get_last_item(lst), item)


if __name__ == '__main__':
    unittest.main()
