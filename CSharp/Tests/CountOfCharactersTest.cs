using Xunit;

namespace CSharp.Tests
{
    public class CountOfCharactersTest
    {
        [Theory]
        [InlineData("AB", "CD", true)]
        [InlineData("ABC", "DE", false)]
        [InlineData("hello", "edabit", false)]
        [InlineData("meow", "woof", true)]
        [InlineData("jrnvjrnnt", "cvjknfjvmfvnfjn", false)]
        [InlineData("jkvnjrt", "krnf", false)]
        [InlineData("Facebook", "Snapchat", true)]
        public void Compare_TwoStringValues_ReturnBoolean(string str1, string str2, bool expected)
        {
            var actual = CountOfCharacters.Compare(str1, str2);

            Assert.Equal(expected, actual);
        }
    }
}