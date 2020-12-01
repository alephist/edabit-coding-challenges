using Xunit;

namespace CSharp.Tests
{
    public class MaxMinNumberArrayTest
    {
        [Theory]
        [InlineData(new int[] { 10, 4, 1, 2, 8, 91 }, 90)]
        [InlineData(new int[] { -70, 43, 34, 54, 22 }, 124)]
        public void DiffMaxMin_IntArray_ReturnDiffOfMaxAndMinValuesFromArray(int[] arr, int expected)
        {
            var actual = MaxMinNumberArray.DiffMaxMin(arr);

            Assert.Equal(expected, actual);
        }
    }
}