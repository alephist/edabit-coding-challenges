using Xunit;

namespace CSharp.Tests
{
    public class WordCountTest
    {
        [Theory]
        [InlineData("It's high noon", 3)]
        [InlineData("Is this easy mode", 4)]
        [InlineData("What an easy task, right", 5)]
        [InlineData("This is a test", 4)]
        [InlineData("Just an example here move along", 6)]
        [InlineData("How are you today?", 4)]
        public void CountWords_StringInput_ReturnNumberOfWords(string str, int expected)
        {
            var actual = WordCount.CountWords(str);

            Assert.Equal(expected, actual);
        }
    }
}