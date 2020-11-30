using System;
using Xunit;

namespace CSharp.Tests
{
    public class MilkAndCookiesTest
    {
        [Theory]
        [InlineData(2013, 12, 24, true)]
        [InlineData(2013, 1, 23, false)]
        [InlineData(3000, 12, 24, true)]
        public void TimeForMilkAndCookies_IntMonthDateYearValues_ReturnBoolean(int year, int month, int day, bool expected)
        {
            var actual = MilkAndCookies.TimeForMilkAndCookies(year, month, day);

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void TimeForMilkAndCookies_InvalidDateValues_ReturnArgumentException()
        {
            var year = 2013;
            var month = 0;
            var day = 23;

            Assert.Throws<ArgumentOutOfRangeException>(() => MilkAndCookies.TimeForMilkAndCookies(year, month, day));
        }
    }
}