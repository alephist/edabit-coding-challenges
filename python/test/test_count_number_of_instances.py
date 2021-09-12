import unittest

from typing import Tuple

from count_number_of_instances import User

test_values: Tuple[Tuple[User, int, str]] = (
    ("johnsmith10", 1, "johnsmith10"),
    ("marysue1989", 2, "marysue1989"),
    ("milan_rodrick", 3, "milan_rodrick"),
    ("joshua_senoron", 4, "joshua_senoron"),
    ("LuckyLootCrate123", 5, "LuckyLootCrate123")
)


class CountNumberOfInstancesTestCase(unittest.TestCase):
    def test_get_count_of_user_instances(self):
        for username, expected_user_count, expected_username in test_values:
            with self.subTest():
                user = User(username)
                self.assertEqual(User.user_count, expected_user_count)
                self.assertEqual(user.username, expected_username)


if __name__ == '__main__':
    unittest.main()
