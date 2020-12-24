// Create a function to extract the name of the subreddit from its URL.
// https://edabit.com/challenge/WT5MGmgaP3jvx8qpt

const subReddit = (link) => {
  let connUri = link.replace("https://", "");

  return connUri.split("/")[2];
};

module.exports = subReddit;
