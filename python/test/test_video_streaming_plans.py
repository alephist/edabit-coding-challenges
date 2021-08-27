import unittest

from video_streaming_plans import BasicPlan, StandardPlan, PremiumPlan

test_values = (
    (BasicPlan.can_stream, True),
    (BasicPlan.can_download, True),
    (BasicPlan.num_of_devices, 1),
    (BasicPlan.has_SD, True),
    (BasicPlan.has_HD, False),
    (BasicPlan.has_UHD, False),
    (BasicPlan.price, '$8.99'),
    (StandardPlan.can_stream, True),
    (StandardPlan.can_download, True),
    (StandardPlan.num_of_devices, 2),
    (StandardPlan.has_SD, True),
    (StandardPlan.has_HD, True),
    (StandardPlan.has_UHD, False),
    (StandardPlan.price, '$12.99'),
    (PremiumPlan.can_stream, True),
    (PremiumPlan.can_download, True),
    (PremiumPlan.num_of_devices, 4),
    (PremiumPlan.has_SD, True),
    (PremiumPlan.has_HD, True),
    (PremiumPlan.has_UHD, True),
    (PremiumPlan.price, '$15.99')
)


class VideoStreamingPlansTestCase(unittest.TestCase):
    def test_return_values_from_different_video_stream_plans(self):
        for attribute, expected_value in test_values:
            with self.subTest():
                self.assertEqual(attribute, expected_value)


if __name__ == '__main__':
    unittest.main()
