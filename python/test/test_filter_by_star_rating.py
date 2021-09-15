import unittest

from typing import Dict, Tuple, Union

from filter_by_star_rating import filter_by_rating

test_values: Tuple[Tuple[Dict[str, str], str, Union[Dict[str, str], str]]] = (
    ({"Brand A": "*", "Brand B": "*****", "Brand C": "*", "Brand D": "**", "Brand E": "****", "Brand F": "*****", "Brand G": "****", "Brand H": "****", "Brand I": "*****", "Brand K": "***",
     "Brand L": "*****", "Brand M": "***", "Brand N": "*", "Brand O": "***", "Brand P": "*****", "Brand Q": "**", "Brand R": "****"}, "***", {"Brand K": "***", "Brand M": "***", "Brand O": "***"}),
    ({"Brand A": "*", "Brand B": "***", "Brand C": "**", "Brand D": "*****", "Brand E": "*", "Brand F": "****", "Brand G": "*****", "Brand H": "*****", "Brand I": "**", "Brand K": "*", "Brand L": "*", "Brand M": "***", "Brand N": "*", "Brand O": "*", "Brand P": "**",
     "Brand Q": "**", "Brand R": "****", "Brand S": "****", "Brand T": "**", "Brand U": "*", "Brand V": "*", "Brand W": "*", "Brand X": "***", "Brand Y": "*****", "Brand Z": "****"}, "**", {"Brand C": "**", "Brand I": "**", "Brand P": "**", "Brand Q": "**", "Brand T": "**"}),
    ({"Brand A": "***", "Brand B": "**", "Brand C": "****", "Brand D": "*", "Brand E": "*", "Brand F": "**", "Brand G": "***", "Brand H": "*",
     "Brand I": "**", "Brand K": "*****", "Brand L": "**", "Brand M": "*"}, "**", {"Brand B": "**", "Brand F": "**", "Brand I": "**", "Brand L": "**"}),
    ({"Brand A": "*", "Brand B": "***", "Brand C": "***", "Brand D": "***", "Brand E": "*", "Brand F": "**", "Brand G": "***", "Brand H": "*****", "Brand I": "**", "Brand K": "***", "Brand L": "*", "Brand M": "****", "Brand N": "****", "Brand O": "***", "Brand P": "**",
     "Brand Q": "*****", "Brand R": "*", "Brand S": "*", "Brand T": "*****", "Brand U": "*****", "Brand V": "*", "Brand W": "*****", "Brand X": "****", "Brand Y": "*", "Brand Z": "*****"}, "****", {"Brand M": "****", "Brand N": "****", "Brand X": "****"}),
    ({"Brand A": "*", "Brand B": "****", "Brand C": "*****", "Brand D": "*", "Brand E": "**", "Brand F": "***", "Brand G": "*", "Brand H": "**",
     "Brand I": "*", "Brand K": "**", "Brand L": "****"}, "*", {"Brand A": "*", "Brand D": "*", "Brand G": "*", "Brand I": "*"}),
    ({"Brand A": "****", "Brand B": "****", "Brand C": "**", "Brand D": "*", "Brand E": "**", "Brand F": "***", "Brand G": "***", "Brand H": "**", "Brand I": "*", "Brand K": "*",
     "Brand L": "****", "Brand M": "*", "Brand N": "*****", "Brand O": "**", "Brand P": "*", "Brand Q": "*****", "Brand R": "*"}, "****", {"Brand A": "****", "Brand B": "****", "Brand L": "****"}),
    ({"Brand A": "**", "Brand B": "*", "Brand C": "*"}, "**", {"Brand A": "**"}),
    ({"Brand A": "****", "Brand B": "*", "Brand C": "****",
     "Brand D": "***", "Brand E": "*****"}, "**", "No results found"),
    ({"Brand A": "****", "Brand B": "****", "Brand C": "***", "Brand D": "****", "Brand E": "*****", "Brand F": "*", "Brand G": "****", "Brand H": "*****", "Brand I": "*", "Brand K": "****", "Brand L": "****", "Brand M": "*", "Brand N": "***", "Brand O": "**", "Brand P": "*", "Brand Q": "*", "Brand R": "****", "Brand S": "*****",
     "Brand T": "****", "Brand U": "*****", "Brand V": "****", "Brand W": "****", "Brand X": "**", "Brand Y": "*"}, "****", {"Brand A": "****", "Brand B": "****", "Brand D": "****", "Brand G": "****", "Brand K": "****", "Brand L": "****", "Brand R": "****", "Brand T": "****", "Brand V": "****", "Brand W": "****"}),
    ({"Brand A": "**", "Brand B": "****", "Brand C": "***", "Brand D": "****", "Brand E": "*", "Brand F": "*", "Brand G": "**", "Brand H": "***", "Brand I": "***", "Brand K": "**", "Brand L": "***", "Brand M": "**", "Brand N": "**", "Brand O": "*", "Brand P": "*", "Brand Q": "*****",
     "Brand R": "***", "Brand S": "**", "Brand T": "*", "Brand U": "**", "Brand V": "*", "Brand W": "**", "Brand X": "****"}, "**", {"Brand A": "**", "Brand G": "**", "Brand K": "**", "Brand M": "**", "Brand N": "**", "Brand S": "**", "Brand U": "**", "Brand W": "**"}),
    ({"Brand A": "*", "Brand B": "**", "Brand C": "****", "Brand D": "*****", "Brand E": "*****", "Brand F": "*****", "Brand G": "****", "Brand H": "*", "Brand I": "*", "Brand K": "*", "Brand L": "****", "Brand M": "*",
     "Brand N": "***", "Brand O": "****", "Brand P": "****", "Brand Q": "****", "Brand R": "****", "Brand S": "**", "Brand T": "****"}, "*", {"Brand A": "*", "Brand H": "*", "Brand I": "*", "Brand K": "*", "Brand M": "*"}),
    ({"Brand A": "**", "Brand B": "*", "Brand C": "*****", "Brand D": "*****"},
     "*****", {"Brand C": "*****", "Brand D": "*****"}),
    ({"Brand A": "*****", "Brand B": "***", "Brand C": "***", "Brand D": "***", "Brand E": "***", "Brand F": "***", "Brand G": "****", "Brand H": "*", "Brand I": "**", "Brand K": "***", "Brand L": "****", "Brand M": "*", "Brand N": "*****", "Brand O": "**",
     "Brand P": "*", "Brand Q": "****", "Brand R": "**", "Brand S": "****", "Brand T": "*", "Brand U": "*****", "Brand V": "**", "Brand W": "*", "Brand X": "**", "Brand Y": "*****"}, "****", {"Brand G": "****", "Brand L": "****", "Brand Q": "****", "Brand S": "****"}),
    ({"Brand A": "*", "Brand B": "*****", "Brand C": "*****", "Brand D": "*", "Brand E": "****", "Brand F": "*", "Brand G": "****", "Brand H": "*****", "Brand I": "***", "Brand K": "***", "Brand L": "***",
     "Brand M": "*", "Brand N": "****", "Brand O": "****", "Brand P": "**", "Brand Q": "*****", "Brand R": "***"}, "****", {"Brand E": "****", "Brand G": "****", "Brand N": "****", "Brand O": "****"}),
    ({"Brand A": "***", "Brand B": "****", "Brand C": "****", "Brand D": "*", "Brand E": "**", "Brand F": "****", "Brand G": "*****",
     "Brand H": "****", "Brand I": "*"}, "****", {"Brand B": "****", "Brand C": "****", "Brand F": "****", "Brand H": "****"}),
    ({"Brand A": "*", "Brand B": "*****", "Brand C": "**", "Brand D": "*****", "Brand E": "**", "Brand F": "*", "Brand G": "**",
     "Brand H": "***", "Brand I": "***", "Brand K": "*****"}, "*****", {"Brand B": "*****", "Brand D": "*****", "Brand K": "*****"}),
    ({"Brand A": "****", "Brand B": "****", "Brand C": "*****", "Brand D": "*****", "Brand E": "****", "Brand F": "***", "Brand G": "**", "Brand H": "**", "Brand I": "****", "Brand K": "****", "Brand L": "****",
     "Brand M": "****", "Brand N": "***", "Brand O": "**"}, "****", {"Brand A": "****", "Brand B": "****", "Brand E": "****", "Brand I": "****", "Brand K": "****", "Brand L": "****", "Brand M": "****"}),
    ({"Brand A": "***", "Brand B": "***"}, "*****", "No results found"),
    ({"Brand A": "***", "Brand B": "*****", "Brand C": "*", "Brand D": "****", "Brand E": "*", "Brand F": "**", "Brand G": "**", "Brand H": "*****",
     "Brand I": "**", "Brand K": "****", "Brand L": "**", "Brand M": "**", "Brand N": "****", "Brand O": "****", "Brand P": "*****"}, "***", {"Brand A": "***"}),
    ({"Brand A": "**", "Brand B": "*", "Brand C": "*****", "Brand D": "*****", "Brand E": "*", "Brand F": "***", "Brand G": "*", "Brand H": "**", "Brand I": "*",
     "Brand K": "**", "Brand L": "*", "Brand M": "***", "Brand N": "*****", "Brand O": "*"}, "*****", {"Brand C": "*****", "Brand D": "*****", "Brand N": "*****"}),
    ({"Brand A": "*", "Brand B": "*", "Brand C": "*", "Brand D": "***", "Brand E": "****", "Brand F": "***", "Brand G": "*****", "Brand H": "**", "Brand I": "*", "Brand K": "*****", "Brand L": "***", "Brand M": "***", "Brand N": "***", "Brand O": "**", "Brand P": "**", "Brand Q": "*****",
     "Brand R": "****", "Brand S": "***", "Brand T": "****", "Brand U": "*****", "Brand V": "***", "Brand W": "*****", "Brand X": "*****", "Brand Y": "***"}, "*****", {"Brand G": "*****", "Brand K": "*****", "Brand Q": "*****", "Brand U": "*****", "Brand W": "*****", "Brand X": "*****"}),
    ({"Brand A": "*****", "Brand B": "****", "Brand C": "****", "Brand D": "*", "Brand E": "*", "Brand F": "****", "Brand G": "****", "Brand H": "**", "Brand I": "****", "Brand K": "****", "Brand L": "*****", "Brand M": "*****", "Brand N": "***", "Brand O": "****", "Brand P": "**",
     "Brand Q": "***", "Brand R": "***", "Brand S": "*****", "Brand T": "*", "Brand U": "*****", "Brand V": "****", "Brand W": "***"}, "****", {"Brand B": "****", "Brand C": "****", "Brand F": "****", "Brand G": "****", "Brand I": "****", "Brand K": "****", "Brand O": "****", "Brand V": "****"}),
    ({"Brand A": "*", "Brand B": "****", "Brand C": "*", "Brand D": "*****", "Brand E": "**", "Brand F": "****", "Brand G": "***", "Brand H": "****", "Brand I": "*", "Brand K": "*", "Brand L": "*****", "Brand M": "*****", "Brand N": "*", "Brand O": "**",
     "Brand P": "*****", "Brand Q": "**", "Brand R": "*****", "Brand S": "*****", "Brand T": "****", "Brand U": "*****", "Brand V": "*****", "Brand W": "**", "Brand X": "***"}, "**", {"Brand E": "**", "Brand O": "**", "Brand Q": "**", "Brand W": "**"}),
    ({"Brand A": "**", "Brand B": "**", "Brand C": "**", "Brand D": "***",
     "Brand E": "*****", "Brand F": "**"}, "****", "No results found"),
    ({"Brand A": "*", "Brand B": "*", "Brand C": "**", "Brand D": "*", "Brand E": "****", "Brand F": "****", "Brand G": "**", "Brand H": "*", "Brand I": "***", "Brand K": "**", "Brand L": "***", "Brand M": "***", "Brand N": "****", "Brand O": "*", "Brand P": "*****",
     "Brand Q": "*****", "Brand R": "*", "Brand S": "****", "Brand T": "****", "Brand U": "*", "Brand V": "**", "Brand W": "****", "Brand X": "****", "Brand Y": "****", "Brand Z": "**"}, "***", {"Brand I": "***", "Brand L": "***", "Brand M": "***"}),
    ({"Brand A": "**", "Brand B": "*****", "Brand C": "***", "Brand D": "**", "Brand E": "*", "Brand F": "****", "Brand G": "****", "Brand H": "*", "Brand I": "*",
     "Brand K": "*", "Brand L": "****", "Brand M": "*", "Brand N": "**", "Brand O": "*", "Brand P": "**", "Brand Q": "*"}, "*****", {"Brand B": "*****"}),
    ({"Brand A": "****", "Brand B": "*****", "Brand C": "*****", "Brand D": "****", "Brand E": "**", "Brand F": "*", "Brand G": "**", "Brand H": "**", "Brand I": "***", "Brand K": "***", "Brand L": "***", "Brand M": "***", "Brand N": "****",
     "Brand O": "*****", "Brand P": "*", "Brand Q": "*", "Brand R": "****", "Brand S": "**", "Brand T": "**", "Brand U": "*****", "Brand V": "***", "Brand W": "***"}, "**", {"Brand E": "**", "Brand G": "**", "Brand H": "**", "Brand S": "**", "Brand T": "**"})
)


class FilterByStarRatingTestCase(unittest.TestCase):
    def test_return_a_new_dictionary_with_items_matching_the_input_rating(self):
        for d, rating, expected_value in test_values:
            with self.subTest():
                self.assertEqual(filter_by_rating(d, rating), expected_value)


if __name__ == '__main__':
    unittest.main()
