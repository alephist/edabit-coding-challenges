using Xunit;

namespace CSharp.Tests
{
    public class FreeCoffeeCupsTest
    {
        [Theory]
        [InlineData(6, 7)]
        [InlineData(3, 3)]
        [InlineData(7, 8)]
        [InlineData(12, 14)]
        [InlineData(213, 248)]
        [InlineData(16, 18)]
        public void TotalCups_IntNumberOfCups_ReturnIntTotalCups(int n, int expected)
        {
            var actual = FreeCoffeeCups.TotalCups(n);

            Assert.Equal(expected, actual);
        }
    }
}