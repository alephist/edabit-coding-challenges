const subReddit = require("../retrieveTheSubreddit");

const data = [
  ["https://www.reddit.com/r/relationships/", "relationships"],
  ["https://www.reddit.com/r/mildlyinteresting/", "mildlyinteresting"],
  ["https://www.reddit.com/r/funny/", "funny"],
  ["https://www.reddit.com/r/CrappyDesign/", "CrappyDesign"],
  ["https://www.reddit.com/r/confession/", "confession"],
  ["https://www.reddit.com/r/AskMen/", "AskMen"],
  ["https://www.reddit.com/r/comics/", "comics"],
  ["https://www.reddit.com/r/lifehacks/", "lifehacks"],
  ["https://www.reddit.com/r/wholesomememes/", "wholesomememes"],
  ["https://www.reddit.com/r/iamverysmart/", "iamverysmart"],
  ["https://www.reddit.com/r/starterpacks/", "starterpacks"],
  ["https://www.reddit.com/r/awww/", "awww"]
];

describe("subReddit", () => {
  describe("Return the name of subreddit from URL", () => {
    test.each(data)("subReddit(%s) = %s", (link, result) => {
      let actual = subReddit(link);

      expect(actual).toEqual(result);
    });
  });
});
