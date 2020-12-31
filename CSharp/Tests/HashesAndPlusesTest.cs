using Xunit;

namespace CSharp.Tests
{
    public class HashesAndPlusesTest
    {
        [Theory]
        [InlineData("#", new int[] { 1, 0 })]
        [InlineData("+++++++", new int[] { 0, 7 })]
        [InlineData("++", new int[] { 0, 2 })]
        [InlineData("#+#+", new int[] { 2, 2 })]
        [InlineData("###+", new int[] { 3, 1 })]
        [InlineData("##+++#", new int[] { 3, 3 })]
        [InlineData("#+++#+#++#", new int[] { 4, 6 })]
        [InlineData("", new int[] { 0, 0 })]
        public void HashPlusCount_HashAndPlusStringInput_ReturnIntArrayOfHashesAndPlusesCount(string str, int[] expected)
        {
            var actual = HashesAndPluses.HashPlusCount(str);

            Assert.Equal(expected, actual);
        }
    }
}