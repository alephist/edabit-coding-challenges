using Xunit;

namespace CSharp.Tests
{
    public class IndexMultiplierTest
    {
        [Theory]
        [InlineData(new int[] { 9, 3, 7, -7 }, -4)]
        [InlineData(new int[] { 3, 8, 6, -4 }, 8)]
        [InlineData(new int[] { 10, -9, -2, 0, 2 }, -5)]
        [InlineData(new int[] { 4, 4, 2, 2, -4 }, -2)]
        [InlineData(new int[] { 9, 4, 7, 5, -1, -3 }, 14)]
        [InlineData(new int[] { -9, 5, 9, 5, -7, 7 }, 45)]
        [InlineData(new int[] { -1, -2, 8, -5 }, -1)]
        [InlineData(new int[] { 7, 10, -5, -4, 6, 2 }, 22)]
        [InlineData(new int[] { 0, 1, 0, 1, 0, 1, 0, 1 }, 16)]
        [InlineData(new int[] { -2, 5, -7, -23, 0, 14 }, -8)]
        [InlineData(new int[] { 53, -43, 39, -2, -11, 3 }, 0)]
        [InlineData(new int[] { 40, 32, -18, 48, -15 }, 80)]
        [InlineData(new int[] { 1, -20, -11, 4, -12, 38, -30, 34 }, 170)]
        [InlineData(new int[] { -21, 30, 20, 6, -16 }, 24)]
        [InlineData(new int[] { 8, -24, -8, -23, 20, 32, -29, -20 }, -183)]
        [InlineData(new int[] { }, 0)]
        public void MultiplyIndex_IntArrayInput_ReturnSumOfElementsMultipliedByItsIndex(int[] arr, int expected)
        {
            var actual = IndexMultiplier.MultiplyIndex(arr);

            Assert.Equal(expected, actual);
        }
    }
}