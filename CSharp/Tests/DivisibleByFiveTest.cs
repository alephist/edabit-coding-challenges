using Xunit;

namespace CSharp.Tests
{
    public class DivisibleByFiveTest
    {
        [Theory]
        [InlineData(5)]
        [InlineData(15)]
        public void IsDivisibleBy5_IntValueDivisibleBy5_ReturnTrue(int num)
        {
            var value = DivisibleByFive.IsDivisibleBy5(num);

            Assert.True(value);
        }

        [Theory]
        [InlineData(7)]
        [InlineData(33)]
        [InlineData(-18)]
        [InlineData(999)]
        [InlineData(2)]
        public void IsDivisibleBy5_IntValueNotDivisibleBy5_ReturnFalse(int num)
        {
            var value = DivisibleByFive.IsDivisibleBy5(num);

            Assert.False(value);
        }
    }
}