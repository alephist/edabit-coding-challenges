using Xunit;

namespace CSharp.Tests
{
    public class FindTheIndexTest
    {
        [Theory]
        [InlineData(new int[] { 1, 5, 3 }, 5, 1)]
        [InlineData(new int[] { 9, 8, 3 }, 3, 2)]
        [InlineData(new int[] { 1, 2, 3 }, 4, -1)]
        [InlineData(new int[] { 1, 5, 3, 10, 17, 20, -6 }, 20, 5)]
        public void Search_IntValueItem_ReturnIndex(int[] arr, int item, int expected)
        {
            var actual = FindTheIndex.Search(arr, item);

            Assert.Equal(expected, actual);
        }
    }
}