import unittest

from typing import Tuple

from secret_society import Friends, society_name

test_values: Tuple[Tuple[Friends, str]] = (
    (['Adam', 'Sarah', 'Malcolm'], 'AMS'),
    (['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey'], 'CJMPRR'),
    (['Harry', 'Newt', 'Luna', 'Cho'], 'CHLN'),
    (['Sherlock', 'Irene', 'John'], 'IJS'),
    (['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj'], 'AHPRS')
)


class SecretSocietyTestCase(unittest.TestCase):
    def test_return_secret_society_name_from_input_friends_list(self):
        for friends, expected_name in test_values:
            with self.subTest():
                self.assertEqual(society_name(friends), expected_name)


if __name__ == '__main__':
    unittest.main()
