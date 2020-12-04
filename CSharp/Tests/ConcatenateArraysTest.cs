using Xunit;

namespace CSharp.Tests
{
    public class ConcatenateArraysTest
    {
        [Theory]
        [InlineData(new int[] { 1, 3, 5 }, new int[] { 2, 6, 8 }, new int[] { 1, 3, 5, 2, 6, 8 })]
        [InlineData(new int[] { 7, 8 }, new int[] { 10, 9, 1, 1, 2 }, new int[] { 7, 8, 10, 9, 1, 1, 2 })]
        [InlineData(new int[] { 4, 5, 1 }, new int[] { 3, 3, 3, 3, 3 }, new int[] { 4, 5, 1, 3, 3, 3, 3, 3 })]
        public void Concat_TwoIntArrays_ReturnNewArrayFromTwoArrays(int[] arr1, int[] arr2, int[] expected)
        {
            var actual = ConcatenateArrays.Concat(arr1, arr2);

            Assert.Equal(expected, actual);
        }
    }
}