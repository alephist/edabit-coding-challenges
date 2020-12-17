using System.Collections.Generic;
using Xunit;

namespace CSharp.Tests
{
    public class PositiveCountNegativeSumTest
    {
        [Theory]
        [MemberData(nameof(DoubleArrayData))]
        public void CountPosSumNeg_DoubleArrayInput_ReturnArrayHavingCountOfPositivesAndSumOfNegatives(double[] arr, int[] expected)
        {
            var actual = PositiveCountNegativeSum.CountPosSumNeg(arr);

            Assert.Equal(expected, actual);
        }

        public static IEnumerable<object[]> DoubleArrayData
        {
            get
            {
                return new[]
                {
                    new object[] { new double[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 }, new int[] { 10, -65 } },

                    new object[] { new double[] { 92, 6, 73, -77, 81, -90, 99, 8, -85, 34 }, new int[] { 7, -252 } },

                    new object[] { new double[] { 91, -4, 80, -73, -28 }, new int[] { 2, -105 } },

                    new object[] { new double[] { }, new int[] {  } },

                    new object[] { new double[] { 69, 100, 28, 47, 53, -61, -24 }, new int[] { 5, -85 } },

                    new object[] { new double[] { 5, 7, 9, -3, -7, 61, -24 }, new int[] { 4, -34 } },

                    new object[] { new double[] { 0 }, new int[] { 0, 0 } },

                    new object[] { new double[] { 98, 51, -19, -97 }, new int[] { 2, -116 } },

                    new object[] { new double[] { -42, 3, -51, -64, 69, 77, -20, -5, 68, -76 }, new int[] { 4, -258 } },

                    new object[] { new double[] { 0, 0, 0 }, new int[] { 0, 0 } }
                };
            }
        }
    }
}