import unittest

from typing import Tuple

from international_greetings import greeting

test_values: Tuple[Tuple[str, str]] = (
    ("Randy", "Hi! I'm Randy, and I'm from Germany."),
    ("Sam", "Hi! I'm Sam, and I'm from Argentina."),
    ("Monti", "Hi! I'm a guest."),
    ("Trudy", "Hi! I'm a guest."),
    ("Wendy", "Hi! I'm Wendy, and I'm from Japan.")
)


class InternationalGreetingsTestCase(unittest.TestCase):
    def test_return_greeting_based_on_input_name(self):
        for name, expected_greeting in test_values:
            with self.subTest():
                self.assertEqual(greeting(name), expected_greeting)


if __name__ == '__main__':
    unittest.main()
