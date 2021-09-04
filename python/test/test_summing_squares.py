import unittest

from typing import Tuple

from summing_squares import squares_sum

test_values: Tuple[Tuple[int, int]] = (
    (1, 1),
    (2, 5),
    (3, 14),
    (4, 30),
    (5, 55),
    (6, 91),
    (7, 140),
    (8, 204),
    (9, 285),
    (10, 385),
    (11, 506),
    (12, 650),
    (13, 819),
    (14, 1015),
    (15, 1240),
    (16, 1496),
    (17, 1785),
    (18, 2109),
    (19, 2470),
    (20, 2870),
    (21, 3311),
    (22, 3795),
    (23, 4324),
    (24, 4900),
    (25, 5525),
    (26, 6201),
    (27, 6930),
    (28, 7714),
    (29, 8555),
    (30, 9455),
    (31, 10416),
    (32, 11440),
    (33, 12529),
    (34, 13685),
    (35, 14910),
    (36, 16206),
    (37, 17575),
    (38, 19019),
    (39, 20540),
    (40, 22140),
    (41, 23821),
    (42, 25585),
    (43, 27434),
    (44, 29370),
    (45, 31395),
    (46, 33511),
    (47, 35720),
    (48, 38024),
    (49, 40425),
    (50, 42925),
    (51, 45526),
    (52, 48230),
    (53, 51039),
    (54, 53955),
    (55, 56980),
    (56, 60116),
    (57, 63365),
    (58, 66729),
    (59, 70210),
    (60, 73810),
    (61, 77531),
    (62, 81375),
    (63, 85344),
    (64, 89440),
    (65, 93665),
    (66, 98021),
    (67, 102510),
    (68, 107134),
    (69, 111895),
    (70, 116795),
    (71, 121836),
    (72, 127020),
    (73, 132349),
    (74, 137825),
    (75, 143450),
    (76, 149226),
    (77, 155155),
    (78, 161239),
    (79, 167480),
    (80, 173880),
    (81, 180441),
    (82, 187165),
    (83, 194054),
    (84, 201110),
    (85, 208335),
    (86, 215731),
    (87, 223300),
    (88, 231044),
    (89, 238965),
    (90, 247065),
    (91, 255346),
    (92, 263810),
    (93, 272459),
    (94, 281295),
    (95, 290320),
    (96, 299536),
    (97, 308945),
    (98, 318549),
    (99, 328350),
    (100, 338350)
)


class SummingSquaresTestCase(unittest.TestCase):
    def test_return_sum_of_all_squares_up_to_including_n(self):
        for n, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(squares_sum(n), expected_sum)


if __name__ == '__main__':
    unittest.main()