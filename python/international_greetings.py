"""
International Greetings

Suppose you have a guest list of students and the country they are from, stored as key-value pairs in a dictionary.

Write a function that takes in a name and returns a name tag, that should read: "Hi! I'm [name], and I'm from [country]."
If the name is not in the dictionary, return: "Hi! I'm a guest."

https://edabit.com/challenge/vAS4Hp4wzSEnQs3tZ
"""


def greeting(name: str) -> str:
    GUEST_LIST = {
        "Randy": "Germany",
        "Karla": "France",
        "Wendy": "Japan",
        "Norman": "England",
        "Sam": "Argentina"
    }

    if name not in GUEST_LIST:
        return "Hi! I'm a guest."
    return f"Hi! I'm {name}, and I'm from {GUEST_LIST[name]}."
