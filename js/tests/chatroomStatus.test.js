const chatroomStatus = require("../chatroomStatus");

const data = [
  [[], "no one online"],
  [["becky325"], "becky325 online"],
  [["becky325", "malcolm888"], "becky325 and malcolm888 online"],
  [
    ["becky325", "malcolm888", "fah32fa"],
    "becky325, malcolm888 and 1 more online"
  ],
  [["paRIE_to"], "paRIE_to online"],
  [["s234f", "mailbox2"], "s234f and mailbox2 online"],
  [
    [
      "pap_ier44",
      "townieBOY",
      "panda321",
      "motor_bike5",
      "sandwichmaker833",
      "violinist91"
    ],
    "pap_ier44, townieBOY and 4 more online"
  ]
];

describe("chatroomStatus", () => {
  describe("Return chatroom status depending on number of users online", () => {
    test.each(data)("chatroomStatus(%p) = %p", (users, result) => {
      let actual = chatroomStatus(users);

      expect(actual).toEqual(result);
    });
  });
});
