using Xunit;

namespace CSharp.Tests
{
    public class PalindromeTest
    {
        [Theory]
        [InlineData("mom", true)]
        [InlineData("scary", false)]
        [InlineData("reviver", true)]
        [InlineData("stressed", false)]
        [InlineData("good", false)]
        [InlineData("refer", true)]
        [InlineData("something", false)]
        [InlineData("redder", true)]
        [InlineData("civic", true)]
        public void CheckPalindrome_StringInputValue_ReturnBooleanIfWordIsPalindrome(string str, bool expected)
        {
            var actual = Palindrome.CheckPalindrome(str);

            Assert.Equal(expected, actual);
        }
    }
}