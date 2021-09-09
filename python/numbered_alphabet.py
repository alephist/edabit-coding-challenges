"""
Numbered Alphabet

Create a function that converts a string of letters to their respective number in the alphabet.

A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	...
0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	...

Notes
Make sure the numbers are spaced.
All letters will be UPPERCASE.

https://edabit.com/challenge/e6fL5EiwGZcsW7C5D
"""


def alph_num(txt: str) -> str:
    num_values = [ord(num) - 65 for num in txt]
    return " ".join(str(num) for num in num_values)
