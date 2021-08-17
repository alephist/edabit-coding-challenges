import unittest

from name_greeting import hello_name

test_values = (
    ("Gerald", "Hello Gerald!"),
    ("Fatima", "Hello Fatima!"),
    ("Ed", "Hello Ed!"),
    ("Tiffany", "Hello Tiffany!")
)


class NameGreetingTestCase(unittest.TestCase):
    def test_return_a_greeting(self):
        for name, greeting in test_values:
            with self.subTest():
                self.assertEqual(hello_name(name), greeting)


if __name__ == '__main__':
    unittest.main()
