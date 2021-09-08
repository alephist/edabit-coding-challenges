import unittest

from typing import List, Tuple

from chatroom_status import chatroom_status

test_values: Tuple[Tuple[List[str], str]] = (
    ([], "no one online"),
    (["becky325"], "becky325 online"),
    (["becky325", "malcolm888"], "becky325 and malcolm888 online"),
    (["becky325", "malcolm888", "fah32fa"],
     "becky325, malcolm888 and 1 more online"),
    (["paRIE_to"], "paRIE_to online"),
    (["s234f", "mailbox2"], "s234f and mailbox2 online"),
    (["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833",
     "violinist91"], "pap_ier44, townieBOY and 4 more online")
)


class ChatroomStatusTestCase(unittest.TestCase):
    def test_return_number_of_users_in_chatroom(self):
        for users, expected_value in test_values:
            with self.subTest():
                self.assertEqual(chatroom_status(users), expected_value)
