using System.Collections.Generic;
using Xunit;

namespace CSharp.Tests
{
    public class LargestNumbersInGroupOfArraysTest
    {
        [Theory]
        [MemberData(nameof(ArrayData))]
        public void FindLargest_ArrayOfIntArraysInput_ReturnArrayOfLargestNumbersFromEachArrays(double[][] values, double[] expected)
        {
            var actual = LargestNumbersInGroupOfArrays.FindLargest(values);

            Assert.Equal(expected, actual);
        }

        public static IEnumerable<object[]> ArrayData
        {
            get
            {
                return new[]
                {
                    new object[] { new double[][] { new double[]{ 4, 2, 7 ,1 }, new double[] { 20, 70, 40, 90 }, new double[] { 1, 2, 0} }, new double[] { 7, 90, 2} },

                    new object[] { new double[][] { new double[] { 0.4321, 0.7634, 0.652 }, new double[] { 1.324, 9.32, 2.5423 }, new double[] { 9, 3, 6, 3 } }, new double[] { 0.7634, 9.32, 9 } },

                    new object[] { new double[][]{ new double[]{ -34, -54, -74 }, new double[] { -32, -2, -65 }, new double[] { -54, 7, -43 } }, new double[] { -34, -2, 7 } },

                    new object[] { new double[][] { new double[] { 0.34, -5, 1.34 }, new double[] { -6.432, -1.762, -1.99 }, new double[] { 32, 65, -6 } }, new double[] { 1.34, -1.762, 65 } },

                    new object[] { new double[][] { new double[] { 0, 0, 0, 0 }, new double[] { 3, 3, 3, 3 }, new double[] { -2, -2 } }, new double[] { 0, 3, -2 } }
                };
            }
        }
    }
}