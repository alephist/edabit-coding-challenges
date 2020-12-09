using Xunit;

namespace CSharp.Tests
{
    public class SumOfCubesTest
    {
        [Theory]
        [InlineData(new int[] { 1, 5, 9 }, 855)]
        [InlineData(new int[] { 3, 4, 5 }, 216)]
        [InlineData(new int[] { 1, 1, 1 }, 3)]
        [InlineData(new int[] { 32 }, 32768)]
        public void GetSum_IntArray_ReturnSumOfCubedElements(int[] arr, int expected)
        {
            var actual = SumOfCubes.GetSum(arr);

            Assert.Equal(expected, actual);
        }
    }
}