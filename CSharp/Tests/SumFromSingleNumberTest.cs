using Xunit;

namespace CSharp.Tests
{
    public class SumFromSingleNumberTest
    {
        [Theory]
        [InlineData(4, 10)]
        [InlineData(13, 91)]
        [InlineData(600, 180300)]
        [InlineData(392, 77028)]
        [InlineData(53, 1431)]
        [InlineData(897, 402753)]
        [InlineData(23, 276)]
        [InlineData(1000, 500500)]
        [InlineData(738, 272691)]
        [InlineData(100, 5050)]
        [InlineData(925, 428275)]
        [InlineData(1, 1)]
        [InlineData(999, 499500)]
        [InlineData(175, 15400)]
        [InlineData(111, 6216)]
        public void AddUp_IntValue_ReturnAccumulativeSum(int num, int expected)
        {
            var actual = SumFromSingleNumber.AddUp(num);

            Assert.Equal(expected, actual);
        }
    }
}