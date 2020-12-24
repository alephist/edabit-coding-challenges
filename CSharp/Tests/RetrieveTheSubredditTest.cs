using Xunit;

namespace CSharp.Tests
{
    public class RetrieveTheSubredditTest
    {
        [Theory]
        [InlineData("https://www.reddit.com/r/relationships/", "relationships")]
        [InlineData("https://www.reddit.com/r/mildlyinteresting/", "mildlyinteresting")]
        [InlineData("https://www.reddit.com/r/funny/", "funny")]
        [InlineData("https://www.reddit.com/r/CrappyDesign/", "CrappyDesign")]
        [InlineData("https://www.reddit.com/r/confession/", "confession")]
        [InlineData("https://www.reddit.com/r/AskMen/", "AskMen")]
        [InlineData("https://www.reddit.com/r/comics/", "comics")]
        [InlineData("https://www.reddit.com/r/lifehacks/", "lifehacks")]
        [InlineData("https://www.reddit.com/r/wholesomememes/", "wholesomememes")]
        [InlineData("https://www.reddit.com/r/iamverysmart/", "iamverysmart")]
        [InlineData("https://www.reddit.com/r/starterpacks/", "starterpacks")]
        [InlineData("https://www.reddit.com/r/awww/", "awww")]
        public void SubReddit_URLStringInput_ReturnNameOfSubreddit(string link, string expected)
        {
            var actual = RetrieveTheSubreddit.SubReddit(link);

            Assert.Equal(expected, actual);
        }
    }
}