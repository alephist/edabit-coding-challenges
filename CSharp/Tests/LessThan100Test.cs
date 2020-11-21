using Xunit;

namespace CSharp.Tests
{
    public class LessThan100Test
    {
        [Theory]
        [InlineData(5, 57, true)]
        [InlineData(77, 30, false)]
        [InlineData(0, 59, true)]
        [InlineData(78, 35, false)]
        [InlineData(63, 11, true)]
        [InlineData(37, 99, false)]
        [InlineData(52, 11, true)]
        [InlineData(82, 95, false)]
        [InlineData(17, 44, true)]
        [InlineData(74, 53, false)]
        [InlineData(3, 77, true)]
        [InlineData(25, 80, false)]
        [InlineData(59, 28, true)]
        [InlineData(69, 87, false)]
        [InlineData(10, 45, true)]
        [InlineData(43, 58, false)]
        [InlineData(50, 44, true)]
        [InlineData(74, 89, false)]
        [InlineData(3, 27, true)]
        [InlineData(21, 79, false)]
        public void SumIsLessThan100_TwoIntValues_ReturnBoolean(int a, int b, bool expected)
        {
            var actual = LessThan100.SumIsLessThan100(a, b);

            Assert.Equal(expected, actual);
        }
    }
}