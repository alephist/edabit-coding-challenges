using Xunit;

namespace CSharp.Tests
{
    public class ReverseAndCapitalizeTest
    {
        [Theory]
        [InlineData("edabit", "TIBADE")]
        [InlineData("abc", "CBA")]
        [InlineData("hellothere", "EREHTOLLEH")]
        [InlineData("input", "TUPNI")]
        [InlineData("indubitably", "YLBATIBUDNI")]
        public void ReverseCapitalize_StringInput_ReturnReversedAndCapitalizedString(string str, string expected)
        {
            var actual = ReverseAndCapitalize.ReverseCapitalize(str);

            Assert.Equal(expected, actual);
        }
    }
}