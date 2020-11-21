using Xunit;

namespace CSharp.Tests
{
    public class RemainderOfTwoNumbersTest
    {
        [Theory]
        [InlineData(7, 2, 1)]
        [InlineData(3, 4, 3)]
        [InlineData(-9, 45, -9)]
        [InlineData(5, 5, 0)]
        public void GetRemainder_TwoIntValues_ReturnRemainder(int x, int y, int expected)
        {
            var actual = RemainderOfTwoNumbers.GetRemainder(x, y);

            Assert.Equal(expected, actual);
        }
    }
}