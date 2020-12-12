using Xunit;

namespace CSharp.Tests
{
    public class EliminateOddNumbersTest
    {
        [Theory]
        [InlineData(new int[] { 1, 2, 3, 4, 5, 6, 7, 8 }, new int[] { 2, 4, 6, 8 })]
        [InlineData(new int[] { 43, 65, 23, 89, 53, 9, 6 }, new int[] { 6 })]
        [InlineData(new int[] { 718, 991, 449, 644, 380, 440 }, new int[] { 718, 644, 380, 440 })]
        [InlineData(new int[] { 148, 6, 16, 85 }, new int[] { 148, 6, 16 })]
        [InlineData(new int[] { 9, 49, 23 }, new int[] { })]
        [InlineData(new int[] { 34, 43, 32, 49, 40 }, new int[] { 34, 32, 40 })]
        [InlineData(new int[] { 1232, 1990, 1284, 1391, 1958 }, new int[] { 1232, 1990, 1284, 1958 })]
        [InlineData(new int[] { 2766, 2651, 2373, 2916, 2397, 2539 }, new int[] { 2766, 2916 })]
        [InlineData(new int[] { 53, 65, 52, 62, 59 }, new int[] { 52, 62 })]
        [InlineData(new int[] { 393, 156, 14, 166, 129, 246 }, new int[] { 156, 14, 166, 246 })]
        public void NoOdds_IntArrayInput_ReturnIntArrayWithAllEvenNumbers(int[] arr, int[] expected)
        {
            var actual = EliminateOddNumbers.NoOdds(arr);

            Assert.Equal(expected, actual);
        }
    }
}