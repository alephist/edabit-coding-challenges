"""
How Good is Your Name?

Create a function that takes a string of name and checks how much good is the given name. Add up the letters of your name to get the total score.

Return your result as per the following rules:
score <= 60:   "NOT TOO GOOD"
61 <= score <= 300:  "PRETTY GOOD"
301 <= score <= 599:  "VERY GOOD"
score >= 600:  "THE BEST"

https://edabit.com/challenge/yRxAeYFMgykFjjmCz
"""
scores = {
    "A": 100,
    "B": 14,
    "C": 9,
    "D": 28,
    "E": 145,
    "F": 12,
    "G": 3,
    "H": 10,
    "I": 200,
    "J": 100,
    "K": 114,
    "L": 100,
    "M": 25,
    "N": 450,
    "O": 80,
    "P": 2,
    "Q": 12,
    "R": 400,
    "S": 113,
    "T": 405,
    "U": 11,
    "V": 10,
    "W": 10,
    "X": 3,
    "Y": 210,
    "Z": 23
}


def name_score(name: str) -> str:
    total_score = sum(scores.get(letter, 0) for letter in name)

    if total_score <= 60:
        return 'NOT TOO GOOD'
    elif total_score <= 300:
        return 'PRETTY GOOD'
    elif total_score <= 599:
        return 'VERY GOOD'
    else:
        return 'THE BEST'
