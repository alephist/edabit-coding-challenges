using Xunit;

namespace CSharp.Tests
{
    public class ArrayOfMultiplesTest
    {
        [Theory]
        [InlineData(7, 5, new int[] { 7, 14, 21, 28, 35 })]
        [InlineData(12, 10, new int[] { 12, 24, 36, 48, 60, 72, 84, 96, 108, 120 })]
        [InlineData(17, 7, new int[] { 17, 34, 51, 68, 85, 102, 119 })]
        [InlineData(630, 14, new int[] { 630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820 })]
        [InlineData(140, 3, new int[] { 140, 280, 420 })]
        [InlineData(7, 8, new int[] { 7, 14, 21, 28, 35, 42, 49, 56 })]
        [InlineData(11, 21, new int[] { 11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231 })]
        public void GetMultiples_IntNumIntLengthInputs_ReturnArrayOfMultiplesWithCertainLength(int num, int length, int[] expected)
        {
            var actual = ArrayOfMultiples.GetMultiples(num, length);

            Assert.Equal(expected, actual);
        }
    }
}