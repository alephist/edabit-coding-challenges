using Xunit;

namespace CSharp.Tests
{
    public class SortThisArrayTest
    {
        [Theory]
        [InlineData(new int[] { 4, 3, 2, 1 }, "Asc", new int[] { 1, 2, 3, 4 })]
        [InlineData(new int[] { 7, 8, 11, 66 }, "Des", new int[] { 66, 11, 8, 7 })]
        [InlineData(new int[] { 1, 2, 3, 4 }, "None", new int[] { 1, 2, 3, 4 })]
        [InlineData(new int[] { 1, 0, 1, 0 }, "Asc", new int[] { 0, 0, 1, 1 })]
        [InlineData(new int[] { 1, 2, 2, 2, 2, 2, 2 }, "Des", new int[] { 2, 2, 2, 2, 2, 2, 1 })]
        [InlineData(new int[] { 9, 7, 43, 11, 16, 111, 19 }, "Asc", new int[] { 7, 9, 11, 16, 19, 43, 111 })]
        public void AscDesNone_IntArrayAndStringInput_ReturnIntArrayBasedOnStringCondition(int[] arr, string str, int[] expected)
        {
            var actual = SortThisArray.AscDesNone(arr, str);

            Assert.Equal(expected, actual);
        }
    }
}