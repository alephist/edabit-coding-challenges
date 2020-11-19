using Xunit;

namespace CSharp.Tests
{
    public class SumOfTwoNumbersTest
    {
        [Theory]
        [InlineData(2, 3, 5)]
        [InlineData(-3, -6, -9)]
        [InlineData(7, 3, 10)]
        public void Sum_TwoIntValues_ReturnSum(int num1, int num2, int expected)
        {
            var actual = SumOfTwoNumbers.Sum(num1, num2);

            Assert.Equal(expected, actual);
        }
    }
}