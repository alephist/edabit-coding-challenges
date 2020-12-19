using Xunit;

namespace CSharp.Tests
{
    public class SumOfTwoSmallestPositiveNumbersTest
    {
        [Theory]
        [InlineData(new int[] { 19, 5, 42, 2, 77 }, 7)]
        [InlineData(new int[] { 10, 343445353, 3453445, 345354534 }, 3453455)]
        [InlineData(new int[] { 2, 9, 6, -1 }, 8)]
        [InlineData(new int[] { 879, 953, 694, -847, 342, 221, -91, -723, 791, -587 }, 563)]
        [InlineData(new int[] { 3683, 2902, 3951, -475, 1617, -2385 }, 4519)]
        [InlineData(new int[] { 280, 134, 108 }, 242)]
        [InlineData(new int[] { 280, 134, 108, 1 }, 109)]
        [InlineData(new int[] { 321, 406, -176 }, 727)]
        [InlineData(new int[] { 1, 1, 1, 1 }, 2)]
        [InlineData(new int[] { -1, -1, 1, 1 }, 2)]
        public void SumSmallest_IntArrayInput_ReturnSumOfTwoSmallestPositiveNumbers(int[] values, int expected)
        {
            var actual = SumOfTwoSmallestPositiveNumbers.SumSmallest(values);

            Assert.Equal(expected, actual);
        }
    }
}