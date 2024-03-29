import unittest

from typing import Tuple

from dashed_vowels import dashed

test_values: Tuple[Tuple[str, str]] = (
    ("Edabit", "-E-d-a-b-i-t"),
    ("Carpe Diem", "C-a-rp-e- D-i--e-m"),
    ("Fight for your right to party!",
     "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"),
    ("Finishing off someone's sentence is annoying, even if you have guessed correctly. Add to that rude, if they stutter.",
     "F-i-n-i-sh-i-ng -o-ff s-o-m-e--o-n-e-'s s-e-nt-e-nc-e- -i-s -a-nn-o-y-i-ng, -e-v-e-n -i-f y-o--u- h-a-v-e- g-u--e-ss-e-d c-o-rr-e-ctly. -A-dd t-o- th-a-t r-u-d-e-, -i-f th-e-y st-u-tt-e-r."),
    ("Fear the soldier who stammers, for he is very fast at pulling the trigger.",
     "F-e--a-r th-e- s-o-ld-i--e-r wh-o- st-a-mm-e-rs, f-o-r h-e- -i-s v-e-ry f-a-st -a-t p-u-ll-i-ng th-e- tr-i-gg-e-r."),
    ("Thank you, I said bravely, dropping the syllables cleanly, like marbles, and secretly full of the most pathetic pride imaginable.",
     "Th-a-nk y-o--u-, -I- s-a--i-d br-a-v-e-ly, dr-o-pp-i-ng th-e- syll-a-bl-e-s cl-e--a-nly, l-i-k-e- m-a-rbl-e-s, -a-nd s-e-cr-e-tly f-u-ll -o-f th-e- m-o-st p-a-th-e-t-i-c pr-i-d-e- -i-m-a-g-i-n-a-bl-e-.")
)


class DashedVowelsTestCase(unittest.TestCase):
    def test_add_dashes_on_both_sides_of_a_vowel_in_a_sentence(self):
        for txt, expected_txt in test_values:
            with self.subTest():
                self.assertEqual(dashed(txt), expected_txt)


if __name__ == '__main__':
    unittest.main()
