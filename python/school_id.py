"""
City School Creating IDS

Many IDS (for emails or Google ID) are created using the person's name.

Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

https://edabit.com/challenge/MNrEx87Bzsg6TfuMY
"""


def create_id(firstname: str, lastname: str) -> str:
    id_first_char = firstname.lower()[0]
    id_second_char = lastname.title()[0:3]
    return f"{id_first_char}{id_second_char}"
