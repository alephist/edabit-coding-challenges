using Xunit;

namespace CSharp.Tests
{
    public class HurdleJumpTest
    {
        [Theory]
        [InlineData(new int[] { 1, 2, 3, 4, 5 }, 5, true)]
        [InlineData(new int[] { 5, 5, 3, 4, 5 }, 3, false)]
        [InlineData(new int[] { 5, 4, 5, 6 }, 10, true)]
        [InlineData(new int[] { 1, 2, 1 }, 1, false)]
        [InlineData(new int[] { 3, 3, 3 }, 4, true)]
        [InlineData(new int[] { 4, 4 }, 3, false)]
        [InlineData(new int[] { }, 4, true)]
        public void Jump_IntHurdlesArrayIntJumpHeight_ReturnBooleanIfJumperCanClearHurdles(int[] hurdles, int jumpHeight, bool expected)
        {
            var actual = HurdleJump.Jump(hurdles, jumpHeight);

            Assert.Equal(expected, actual);
        }
    }
}