using Xunit;

namespace CSharp.Tests
{
    public class SummingASliceTest
    {
        [Theory]
        [InlineData(new int[] { 1, 3, 2 }, 2, 4)]
        [InlineData(new int[] { 4, 2, 5, 7 }, 4, 18)]
        [InlineData(new int[] { 3, 6, 2 }, 0, 0)]
        [InlineData(new int[] { 2, 4 }, 9, 6)]
        [InlineData(new int[] { -5, 2 }, 2, -3)]
        [InlineData(new int[] { 0, 0, 0, 3, 4 }, 3, 0)]
        public void SliceSum_IntArrayAndIntNumInputs_ReturnSumOfFirstNumNumbersInAnArray(int[] arr, int n, int expected)
        {
            var actual = SummingASlice.SliceSum(arr, n);

            Assert.Equal(expected, actual);
        }
    }
}