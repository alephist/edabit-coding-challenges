using System;
using Xunit;

namespace CSharp.Tests
{
    public class EvenDivisionTest
    {
        [Theory]
        [InlineData(98, 7, true)]
        [InlineData(87, 49, false)]
        [InlineData(34, 14, false)]
        [InlineData(78, 6, true)]
        [InlineData(30, 4, false)]
        [InlineData(87, 73, false)]
        [InlineData(74, 7, false)]
        [InlineData(87, 29, true)]
        [InlineData(48, 24, true)]
        [InlineData(99, 20, false)]
        [InlineData(98, 49, true)]
        [InlineData(100, 6, false)]
        [InlineData(64, 4, true)]
        [InlineData(70, 35, true)]
        [InlineData(38, 38, true)]
        [InlineData(29, 3, false)]
        [InlineData(20, 8, false)]
        [InlineData(66, 50, false)]
        [InlineData(95, 1, true)]
        [InlineData(58, 2, true)]
        public void DividesEvenly_TwoIntValues_ReturnBoolean(int a, int b, bool expected)
        {
            var actual = EvenDivision.DividesEvenly(a, b);

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void DividesEvenly_TwoIntValuesWhereAIsLessThanB_ReturnArgumentException()
        {
            int a = 7;
            int b = 98;

            Assert.Throws<ArgumentException>(() => EvenDivision.DividesEvenly(a, b));
        }
    }
}