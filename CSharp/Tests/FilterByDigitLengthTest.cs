using Xunit;

namespace CSharp.Tests
{
    public class FilterByDigitLengthTest
    {
        [Theory]
        [InlineData(new int[] { 88, 232, 4, 9721, 555 }, 3, new int[] { 232, 555 })]
        [InlineData(new int[] { 2, 7, 8, 9, 1012 }, 1, new int[] { 2, 7, 8, 9 })]
        [InlineData(new int[] { 32, 88, 74, 91, 300, 4050 }, 1, new int[] { })]
        [InlineData(new int[] { 5, 6, 8, 9 }, 1, new int[] { 5, 6, 8, 9 })]
        [InlineData(new int[] { 99, 838, 435, 7666, 989, 431 }, 3, new int[] { 838, 435, 989, 431 })]
        [InlineData(new int[] { 99, 838, 435, 7666, 989, 431 }, 2, new int[] { 99 })]
        public void FilterDigitLength_IntArrayAndIntNumOfDigits_ReturnIntArrayWithCertainNumberOfDigits(int[] arr, int num, int[] expected)
        {
            var actual = FilterByDigitLength.FilterDigitLength(arr, num);

            Assert.Equal(expected, actual);
        }
    }
}