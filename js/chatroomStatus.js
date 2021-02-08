// Problem# 153
// Write a function that returns the number of users in a chatroom based on the following rules:
// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
// https://edabit.com/challenge/hscAGyt4iNZ3PKy3g

const chatroomStatus = (users) => {
  let message;
  const [firstUser, secondUser, ...others] = users;

  switch (users.length) {
    case 0:
      message = "no one online";
      break;

    case 1:
      message = `${firstUser} online`;
      break;

    case 2:
      message = `${firstUser} and ${secondUser} online`;
      break;

    default:
      message = `${firstUser}, ${secondUser} and ${others.length} more online`;
  }

  return message;
};

module.exports = chatroomStatus;
