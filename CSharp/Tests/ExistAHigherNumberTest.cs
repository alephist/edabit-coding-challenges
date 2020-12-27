using Xunit;

namespace CSharp.Tests
{
    public class ExistAHigherNumberTest
    {
        [Theory]
        [InlineData(new int[] { 5, 3, 15, 22, 4 }, 10, true)]
        [InlineData(new int[] { 1, 2, 3, 4, 5 }, 8, false)]
        [InlineData(new int[] { 4, 3, 3, 3, 2, 2, 2 }, 4, true)]
        [InlineData(new int[] { 2, 2, 2, 2 }, 5, false)]
        [InlineData(new int[] { }, 0, false)]
        public void ExistHigher_IntArrayAndIntNumInput_ReturnBooleanIfExistAtLeastOneNumberGreaterOrEqualNum(int[] arr, int n, bool expected)
        {
            var actual = ExistAHigherNumber.ExistHigher(arr, n);

            Assert.Equal(expected, actual);
        }
    }
}