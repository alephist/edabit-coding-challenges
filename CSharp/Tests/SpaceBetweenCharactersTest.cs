using Xunit;

namespace CSharp.Tests
{
    public class SpaceBetweenCharactersTest
    {
        [Theory]
        [InlineData("space", "s p a c e")]
        [InlineData("far out", "f a r   o u t")]
        [InlineData("elongated musk", "e l o n g a t e d   m u s k")]
        [InlineData("long", "l o n g")]
        [InlineData("123", "1 2 3")]
        [InlineData("a1b2c3", "a 1 b 2 c 3")]
        public void SpaceMeOut_StringInputValue_ReturnStringWithSpacesBetweenCharacters(string str, string expected)
        {
            var actual = SpaceBetweenCharacters.SpaceMeOut(str);

            Assert.Equal(expected, actual);
        }
    }
}