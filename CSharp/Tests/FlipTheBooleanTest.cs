using Xunit;

namespace CSharp.Tests
{
    public class FlipTheBooleanTest
    {
        [Theory]
        [InlineData(true, false)]
        [InlineData(false, true)]
        public void Reverse_BooleanValue_ReturnReversedBooleanValue(bool boolean, bool expected)
        {
            var actual = FlipTheBoolean.Reverse(boolean);

            Assert.Equal(expected, actual);
        }
    }
}