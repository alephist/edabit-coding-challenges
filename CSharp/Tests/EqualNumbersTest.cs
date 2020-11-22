using Xunit;

namespace CSharp.Tests
{
    public class EqualNumbersTest
    {
        [Theory]
        [InlineData(2, 2)]
        [InlineData(88, 88)]
        [InlineData(1, 1)]
        public void IsEqual_TwoEqualIntValues_ReturnTrue(int num1, int num2)
        {
            var numbersAreEqual = EqualNumbers.IsEqual(num1, num2);

            Assert.True(numbersAreEqual);
        }

        [Theory]
        [InlineData(36, 35)]
        [InlineData(5, 6)]
        public void IsEqual_TwoDifferentIntValues_ReturnFalse(int num1, int num2)
        {
            var numbersAreEqual = EqualNumbers.IsEqual(num1, num2);

            Assert.False(numbersAreEqual);
        }
    }
}