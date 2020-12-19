using Xunit;

namespace CSharp.Tests
{
    public class PerfectNumberTest
    {
        [Theory]
        [InlineData(6, true)]
        [InlineData(28, true)]
        [InlineData(496, true)]
        [InlineData(8128, true)]
        [InlineData(33550336, true)]
        [InlineData(12, false)]
        [InlineData(97, false)]
        [InlineData(481, false)]
        [InlineData(1001, false)]
        [InlineData(55555, false)]
        public void CheckPerfect_IntValueInput_ReturnBooleanIfSumOfFactorsIsEqualToInput(int num, bool expected)
        {
            var actual = PerfectNumber.CheckPerfect(num);

            Assert.Equal(expected, actual);
        }
    }
}