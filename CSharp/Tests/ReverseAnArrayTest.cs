using Xunit;

namespace CSharp.Tests
{
    public class ReverseAnArrayTest
    {
        [Theory]
        [InlineData(new int[] { 1, 2, 3, 4 }, new int[] { 4, 3, 2, 1 })]
        [InlineData(new int[] { 5, 6, 7 }, new int[] { 7, 6, 5 })]
        [InlineData(new int[] { 9, 9, 2, 3, 4 }, new int[] { 4, 3, 2, 9, 9 })]
        [InlineData(new int[] { 3, 3 }, new int[] { 3, 3 })]
        [InlineData(new int[] { -1, -1, -1 }, new int[] { -1, -1, -1 })]
        [InlineData(new int[] { }, new int[] { })]
        public void Reverse_IntArray_ReturnReversedIntArray(int[] arr, int[] expected)
        {
            var actual = ReverseAnArray.Reverse(arr);

            Assert.Equal(expected, actual);
        }
    }
}