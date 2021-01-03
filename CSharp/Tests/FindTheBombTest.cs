using Xunit;

namespace CSharp.Tests
{
    public class FindTheBombTest
    {
        [Theory]
        [InlineData("There is a bomb.", "Duck!!!")]
        [InlineData("Hey, did you find it?", "There is no bomb, relax.")]
        [InlineData("Hey, did you think there is a bomb?", "Duck!!!")]
        [InlineData("This goes boom!!!", "There is no bomb, relax.")]
        [InlineData("Hey, did you find the BoMb?", "Duck!!!")]
        [InlineData("Commotion in the third, a bomb is found!", "Duck!!!")]
        public void Bomb_StringInput_ReturnMessageIfStringHasWordBomb(string txt, string expected)
        {
            var actual = FindTheBomb.Bomb(txt);

            Assert.Equal(expected, actual);
        }
    }
}