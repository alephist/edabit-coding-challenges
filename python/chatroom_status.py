"""
Chat Room Status

Write a function that returns the number of users in a chatroom based on the following rules:
If there is no one, return "no one online".
If there is 1 person, return "user1 online".
If there are 2 people, return user1 and user2 online".
If there are n>2 people, return the first two names and add "and n-2 more online".

https://edabit.com/challenge/PwGFjiSG3kXzp8rjw
"""
from typing import List


def chatroom_status(users: List[str]) -> str:
    if len(users) > 2:
        return f"{users[0]}, {users[1]} and {len(users) - 2} more online"
    elif len(users) == 2:
        return f"{users[0]} and {users[1]} online"
    elif len(users) == 1:
        return f"{users[0]} online"
    elif not users:
        return "no one online"
