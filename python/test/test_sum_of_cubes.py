import unittest

from typing import Tuple

from sum_of_cubes import sum_cubes

test_values: Tuple[Tuple[int, int]] = (
    (1, 1),
    (2, 9),
    (3, 36),
    (4, 100),
    (5, 225),
    (6, 441),
    (7, 784),
    (8, 1296),
    (9, 2025),
    (10, 3025),
    (123, 58155876),
    (125, 62015625),
    (133, 79405921),
    (167, 196784784),
    (188, 315630756),
    (199, 396010000),
    (200, 404010000),
    (300, 2038522500),
    (400, 6432040000),
    (500, 15687562500),
    (12345, 5807306426319225)
)


class SumOfCubesTestCase(unittest.TestCase):
    def test_return_sum_of_all_cubed_values_from_1_to_n(self):
        for n, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(sum_cubes(n), expected_sum)


if __name__ == '__main__':
    unittest.main()
