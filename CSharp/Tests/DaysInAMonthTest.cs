using Xunit;

namespace CSharp.Tests
{
    public class DaysInAMonthTest
    {
        [Theory]
        [InlineData(1, 2018, 31)]
        [InlineData(2, 2018, 28)]
        [InlineData(3, 2018, 31)]
        [InlineData(4, 2018, 30)]
        [InlineData(5, 2018, 31)]
        [InlineData(6, 2018, 30)]
        [InlineData(7, 2018, 31)]
        [InlineData(8, 2018, 31)]
        [InlineData(9, 2018, 30)]
        [InlineData(10, 2018, 31)]
        [InlineData(11, 2018, 30)]
        [InlineData(12, 2018, 31)]
        [InlineData(2, 2004, 29)]
        [InlineData(2, 1800, 28)]
        [InlineData(2, 1600, 29)]
        public void GetDays_IntMonthYear_ReturnNumberOfDays(int month, int year, int expected)
        {
            var actual = DaysInAMonth.GetDays(month, year);

            Assert.Equal(expected, actual);
        }
    }
}