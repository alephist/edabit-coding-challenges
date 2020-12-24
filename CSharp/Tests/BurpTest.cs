using Xunit;

namespace CSharp.Tests
{
    public class BurpTest
    {
        [Theory]
        [InlineData(3, "Burrrp")]
        [InlineData(5, "Burrrrrp")]
        [InlineData(9, "Burrrrrrrrrp")]
        [InlineData(10, "Burrrrrrrrrrp")]
        [InlineData(13, "Burrrrrrrrrrrrrp")]
        [InlineData(18, "Burrrrrrrrrrrrrrrrrrp")]
        [InlineData(1, "Burp")]
        public void LongBurp_IntInputValue_ReturnTheWordBurpWithAmountOfRs(int num, string expected)
        {
            var actual = Burp.LongBurp(num);

            Assert.Equal(expected, actual);
        }
    }
}