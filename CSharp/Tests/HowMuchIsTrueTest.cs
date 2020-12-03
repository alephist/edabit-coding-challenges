using Xunit;

namespace CSharp.Tests
{
    public class HowMuchIsTrueTest
    {
        [Theory]
        [InlineData(new bool[] { true, false, false, true, false }, 2)]
        [InlineData(new bool[] { false, false, false, false }, 0)]
        [InlineData(new bool[] { }, 0)]
        [InlineData(new bool[] { false, false, true, true, false, false, false, true, true, true, true, false, true, true, false }, 8)]
        [InlineData(new bool[] { true, false, true, true, false, false, false, false, false }, 3)]
        [InlineData(new bool[] { false, true, true, false, true, true, false, true, false, true, false, true, false, true, false }, 8)]
        [InlineData(new bool[] { true, false, true, true, true, false, true, true, false, false }, 6)]
        [InlineData(new bool[] { false, false, false, false, true, false, true, false, true, false, false }, 3)]
        [InlineData(new bool[] { true, false, false, false, true, false, false, true, false, false, false }, 3)]
        [InlineData(new bool[] { true, true, false, true, false, false, false, false, true, false }, 4)]
        [InlineData(new bool[] { true, false, true, true, false, true, true, true, true, false, true, false, true, false }, 9)]
        [InlineData(new bool[] { true, false, true, true, true, true, false, true, true, false, true, false, false, false, false }, 8)]
        [InlineData(new bool[] { true, true, false, false, false, false, true, false, true, true, false, true }, 6)]
        public void CountTrue_BoolArray_ReturnTrueCount(bool[] arr, int expected)
        {
            var actual = HowMuchIsTrue.CountTrue(arr);

            Assert.Equal(expected, actual);
        }
    }
}