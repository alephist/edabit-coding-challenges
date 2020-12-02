using Xunit;

namespace CSharp.Tests
{
    public class GivenNumberTest
    {
        [Theory]
        [InlineData(new int[] { 1, 2, 3, 4, 5 }, 3, true)]
        [InlineData(new int[] { 1, 1, 2, 1, 1 }, 3, false)]
        [InlineData(new int[] { 1, 1, 2, 1, 5, 4, 7 }, 7, true)]
        [InlineData(new int[] { 1, 1, 2, 1, 5, 4, 7 }, 8, false)]
        [InlineData(new int[] { 5, 5, 5, 6 }, 5, true)]
        [InlineData(new int[0], 5, false)]
        public void Check_IntArrayIntInput_ReturnBoolean(int[] arr, int item, bool expected)
        {
            var actual = GivenNumber.Check(arr, item);

            Assert.Equal(expected, actual);
        }
    }
}