using Xunit;

namespace CSharp.Tests
{
    public class FarmProblemTest
    {
        [Theory]
        [InlineData(5, 2, 8, 50)]
        [InlineData(3, 4, 7, 50)]
        [InlineData(1, 2, 3, 22)]
        [InlineData(3, 5, 2, 34)]
        public void Animals_IntNumberOfChickenCowPig_ReturnIntTotalLegs(int chickens, int cows, int pigs, int expected)
        {
            var actual = FarmProblem.Animals(chickens, cows, pigs);

            Assert.Equal(expected, actual);
        }
    }
}