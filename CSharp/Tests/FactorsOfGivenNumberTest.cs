using Xunit;

namespace CSharp.Tests
{
    public class FactorsOfGivenNumberTest
    {
        [Theory]
        [InlineData(9, new int[] { 1, 3, 9 })]
        [InlineData(12, new int[] { 1, 2, 3, 4, 6, 12 })]
        [InlineData(20, new int[] { 1, 2, 4, 5, 10, 20 })]
        [InlineData(0, new int[] { })]
        [InlineData(100, new int[] { 1, 2, 4, 5, 10, 20, 25, 50, 100 })]
        [InlineData(999, new int[] { 1, 3, 9, 27, 37, 111, 333, 999 })]
        [InlineData(2226, new int[] { 1, 2, 3, 6, 7, 14, 21, 42, 53, 106, 159, 318, 371, 742, 1113, 2226 })]
        public void FindFactors_IntInputValue_ReturnIntArrayOfFactors(int num, int[] expected)
        {
            var actual = FactorsOfGivenNumber.FindFactors(num);

            Assert.Equal(expected, actual);
        }
    }
}