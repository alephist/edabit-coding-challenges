using Xunit;

namespace CSharp.Tests
{
    public class StutteringFunctionTest
    {
        [Theory]
        [InlineData("increasing", "in... in... increasing?")]
        [InlineData("adventures", "ad... ad... adventures?")]
        [InlineData("enticing", "en... en... enticing?")]
        [InlineData("unacceptable", "un... un... unacceptable?")]
        [InlineData("accountable", "ac... ac... accountable?")]
        [InlineData("incredible", "in... in... incredible?")]
        [InlineData("exquisite", "ex... ex... exquisite?")]
        [InlineData("am", "am... am... am?")]
        [InlineData("enduring", "en... en... enduring?")]
        [InlineData("outstanding", "ou... ou... outstanding?")]
        public void Stutter_StringInputValue_ReturnStutteredString(string word, string expected)
        {
            var actual = StutteringFunction.Stutter(word);

            Assert.Equal(expected, actual);
        }
    }
}