using Xunit;

namespace CSharp.Tests
{
    public class PurgeAndOrganizeTest
    {
        [Theory]
        [InlineData(new double[] { 1, 5, 8, 2, 3, 4, 4, 4, 10 }, new double[] { 1, 2, 3, 4, 5, 8, 10 })]
        [InlineData(new double[] { 1, 2, 5, 4, 7, 7, 7 }, new double[] { 1, 2, 4, 5, 7 })]
        [InlineData(new double[] { 7, 6, 5, 4, 3, 2, 1, 0, 1 }, new double[] { 0, 1, 2, 3, 4, 5, 6, 7 })]
        [InlineData(new double[] { 3, 6, 5, 4, 3, 27, 1, 100, 1 }, new double[] { 1, 3, 4, 5, 6, 27, 100 })]
        [InlineData(new double[] { -9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415 }, new double[] { -87, -9, -4.323827, -3.1415, -3.1414, 8 })]
        public void UniqueSort_DoubleArrayInput_ReturnArrayWithSortedAndUniqueElements(double[] arr, double[] expected)
        {
            var actual = PurgeAndOrganize.UniqueSort(arr);

            Assert.Equal(expected, actual);
        }
    }
}