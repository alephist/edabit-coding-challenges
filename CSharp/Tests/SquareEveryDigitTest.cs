using Xunit;

namespace CSharp.Tests
{
    public class SquareEveryDigitTest
    {
        [Theory]
        [InlineData(9119, 811181)]
        [InlineData(8726, 6449436)]
        [InlineData(9763, 8149369)]
        [InlineData(2230, 4490)]
        [InlineData(2797, 4498149)]
        [InlineData(233, 499)]
        [InlineData(7437, 4916949)]
        [InlineData(2483, 416649)]
        [InlineData(5742, 2549164)]
        [InlineData(5636, 2536936)]
        [InlineData(841, 64161)]
        public void SquareDigits_IntInput_ReturnIntWithSquaredDigits(int num, int expected)
        {
            var actual = SquareEveryDigit.SquareDigits(num);

            Assert.Equal(expected, actual);
        }
    }
}