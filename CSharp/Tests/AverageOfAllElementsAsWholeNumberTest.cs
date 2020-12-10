using Xunit;

namespace CSharp.Tests
{
    public class AverageOfAllElementsAsWholeNumberTest
    {
        [Theory]
        [InlineData(new int[] { 3, 5, 9 }, false)]
        [InlineData(new int[] { 1, 1, 1, 1 }, true)]
        [InlineData(new int[] { 1, 2, 3, 4, 5 }, true)]
        [InlineData(new int[] { 5, 2, 4 }, false)]
        [InlineData(new int[] { 11, 22 }, false)]
        [InlineData(new int[] { 4, 1, 7, 9, 2, 5, 7, 2, 4 }, false)]
        public void IsAvgWhole_IntArrayValue_ReturnBooleanIfAverageOfAllElementsIsInteger(int[] arr, bool expected)
        {
            var actual = AverageOfAllElementsAsWholeNumber.IsAvgWhole(arr);

            Assert.Equal(expected, actual);
        }
    }
}