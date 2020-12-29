using Xunit;

namespace CSharp.Tests
{
    public class HowManyVowelsTest
    {
        [Theory]
        [InlineData("Celebration", 5)]
        [InlineData("Palm", 1)]
        [InlineData("Prediction", 4)]
        [InlineData("Suite", 3)]
        [InlineData("Quote", 3)]
        [InlineData("Portrait", 3)]
        [InlineData("Steam", 2)]
        [InlineData("Tape", 2)]
        [InlineData("Nightmare", 3)]
        [InlineData("Convention", 4)]
        public void CountVowels_StringInput_ReturnCountOfVowels(string str, int expected)
        {
            var actual = HowManyVowels.CountVowels(str);

            Assert.Equal(expected, actual);
        }
    }
}