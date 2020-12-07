using Xunit;

namespace CSharp.Tests
{
    public class MultiplyByLengthTest
    {
        [Theory]
        [InlineData(new int[] { 2, 6, 4, 9 }, new int[] { 8, 24, 16, 36 })]
        [InlineData(new int[] { 4, 1, 1 }, new int[] { 12, 3, 3 })]
        [InlineData(new int[] { 1, 0, 3, 3, 7, 2, 1 }, new int[] { 7, 0, 21, 21, 49, 14, 7 })]
        [InlineData(new int[] { 0 }, new int[] { 0 })]
        public void MultiplyLength_IntArray_ReturnArrayWithEachElementMultipliedByLength(int[] arr, int[] expected)
        {
            var actual = MultiplyByLength.MultiplyLength(arr);

            Assert.Equal(expected, actual);
        }
    }
}