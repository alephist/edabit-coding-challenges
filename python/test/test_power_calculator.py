import unittest

from power_calculator import get_circuit_power

test_values = (
    (110, 3, 330),
    (230, 10, 2300),
    (480, 20, 9600)
)


class PowerCalculatorTestCase(unittest.TestCase):
    def test_calculate_power(self):
        for voltage, current, expected in test_values:
            with self.subTest():
                self.assertEqual(get_circuit_power(voltage, current), expected)


if __name__ == '__main__':
    unittest.main()
