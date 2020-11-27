const getVoteCount = require("../voteCount");

const data = [
  [{ upvotes: 13, downvotes: 0 }, 13],
  [{ upvotes: 2, downvotes: 33 }, -31],
  [{ upvotes: 132, downvotes: 132 }, 0],
  [{ upvotes: 0, downvotes: 0 }, 0],
  [{ downvotes: 4, upvotes: 1 }, -3]
];

describe("getVoteCount", () => {
  describe("Return difference of upvotes and downvotes", () => {
    test.each(data)("getVoteCount(%p) = %i", (votes, expected) => {
      var actual = getVoteCount(votes);

      expect(actual).toEqual(expected);
    });
  });
});
