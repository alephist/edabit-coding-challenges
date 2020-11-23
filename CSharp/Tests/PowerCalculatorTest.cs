using Xunit;

namespace CSharp.Tests
{
    public class PowerCalculatorTest
    {
        [Theory]
        [InlineData(110, 3, 330)]
        [InlineData(230, 10, 2300)]
        [InlineData(480, 20, 9600)]
        public void CircuitPower_IntVoltageAndCurrent_ReturnIntPower(int voltage, int current, int expected)
        {
            var actual = PowerCalculator.CircuitPower(voltage, current);

            Assert.Equal(expected, actual);
        }
    }
}