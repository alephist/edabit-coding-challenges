using Xunit;

namespace CSharp.Tests
{
    public class ProductOfAllNumbersTest
    {
        [Theory]
        [InlineData(new int[] { 3, 4, 1, 1, 5 }, 15)]
        [InlineData(new int[] { 5, 5, 8, 2, 4, 32 }, 25)]
        [InlineData(new int[] { 1, 2, 1, 2, 1, 2, 1, 2 }, 1)]
        [InlineData(new int[] { 0, 0, 0, 1 }, 1)]
        [InlineData(new int[] { 1, 2, 2, 5, 2, 0 }, 5)]
        public void OddProduct_IntArrayInput_ReturnProductOfAllOddNumbers(int[] arr, int expected)
        {
            var actual = ProductOfAllOddNumbers.OddProduct(arr);

            Assert.Equal(expected, actual);
        }
    }
}