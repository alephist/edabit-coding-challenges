using Xunit;

namespace CSharp.Tests
{
    public class RepeatingLettersNthTimesTest
    {
        [Theory]
        [InlineData("mice", 5, "mmmmmiiiiiccccceeeee")]
        [InlineData("hello", 3, "hhheeellllllooo")]
        [InlineData("stop", 1, "stop")]
        [InlineData("tomato", 2, "ttoommaattoo")]
        public void Repeat_StringInputValue_ReturnStringWithCharactersRepeatedNthTimes(string str, int num, string expected)
        {
            var actual = RepeatingLettersNthTimes.Repeat(str, num);

            Assert.Equal(expected, actual);
        }
    }
}