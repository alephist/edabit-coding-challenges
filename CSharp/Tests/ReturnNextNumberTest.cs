using Xunit;

namespace CSharp.Tests
{
    public class ReturnNextNumberTest
    {
        [Theory]
        [InlineData(2, 3)]
        [InlineData(-9, -8)]
        [InlineData(0, 1)]
        [InlineData(100, 101)]
        [InlineData(999, 1000)]
        [InlineData(73, 74)]
        public void Additon_IntValue_ReturnNextIncrementedValue(int num, int expected)
        {
            var actual = ReturnNextNumber.Addition(num);

            Assert.Equal(expected, actual);
        }
    }
}