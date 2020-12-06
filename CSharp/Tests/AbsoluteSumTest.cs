using Xunit;

namespace CSharp.Tests
{
    public class AbsoluteSumTest
    {
        [Theory]
        [InlineData(new int[] { 2, -1, -3, 4, 8 }, 18)]
        [InlineData(new int[] { -1 }, 1)]
        [InlineData(new int[] { -1, -3, -5, -4, -10, 0 }, 23)]
        [InlineData(new int[] { 8, 9, 10, 32, 101, -10 }, 170)]
        [InlineData(new int[] { 500 }, 500)]
        public void GetAbsoluteSum_IntArrayValue_ReturnSumOfAbsoluteValueOfEachElement(int[] arr, int expected)
        {
            var actual = AbsoluteSum.GetAbsoluteSum(arr);

            Assert.Equal(expected, actual);
        }
    }
}