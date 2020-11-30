using Xunit;

namespace CSharp.Tests
{
    public class DrinksTest
    {
        [Theory]
        [InlineData(17, true, false)]
        [InlineData(30, true, false)]
        [InlineData(24, false, true)]
        [InlineData(18, false, true)]
        [InlineData(16, false, false)]
        [InlineData(18, true, false)]
        [InlineData(17, false, false)]
        public void ShouldServeDrinks_IntAgeBoolOnBreak_ReturnBoolean(int age, bool onBreak, bool expected)
        {
            var actual = Drinks.ShouldServeDrinks(age, onBreak);

            Assert.Equal(expected, actual);
        }
    }
}