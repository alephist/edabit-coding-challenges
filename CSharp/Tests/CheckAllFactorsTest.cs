using Xunit;

namespace CSharp.Tests
{
    public class CheckAllFactorsTest
    {
        [Theory]
        [InlineData(new int[] { 2, 3, 4 }, 12, true)]
        [InlineData(new int[] { 1, 2, 3, 8 }, 12, false)]
        [InlineData(new int[] { 1, 2, 50 }, 100, true)]
        [InlineData(new int[] { 1, 9, 81 }, 81, true)]
        [InlineData(new int[] { 5, 10, 50 }, 500, true)]
        [InlineData(new int[] { 5, 10, 499 }, 500, false)]
        [InlineData(new int[] { 3, 6 }, 9, false)]
        public void CheckFactors_IntArrayAndIntNumInput_ReturnBooleanIfAllElementsAreFactorsOfNum(int[] factors, int num, bool expected)
        {
            var actual = CheckAllFactors.CheckFactors(factors, num);

            Assert.Equal(expected, actual);
        }
    }
}