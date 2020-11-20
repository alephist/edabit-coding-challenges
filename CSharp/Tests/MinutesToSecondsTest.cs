using Xunit;

namespace CSharp.Tests
{
    public class MinutesToSecondsTest
    {
        [Theory]
        [InlineData(6, 360)]
        [InlineData(4, 240)]
        [InlineData(8, 480)]
        [InlineData(60, 3600)]
        public void Convert_IntMinuteValue_ReturnSecondsValue(int minutes, int expected)
        {
            var actual = MinutesToSeconds.Convert(minutes);

            Assert.Equal(expected, actual);
        }
    }
}