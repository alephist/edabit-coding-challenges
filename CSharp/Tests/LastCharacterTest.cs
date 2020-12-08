using Xunit;

namespace CSharp.Tests
{
    public class LastCharacterTest
    {
        [Theory]
        [InlineData("Hello", 3, "Hellooo")]
        [InlineData("hey", 6, "heyyyyyy")]
        [InlineData("plsssss!1!", 5, "plsssss!1!!!!!")]
        [InlineData("gr", 2, "grr")]
        [InlineData("excuse me what?", 5, "excuse me what?????")]
        [InlineData("123", 5, "1233333")]
        [InlineData("a", 3, "aaa")]
        [InlineData("STOP", 3, "STOPPP")]
        public void ModifyLast_StringInput_ReturnStringWithLastCharacterRepeated(string str, int n, string expected)
        {
            var actual = LastCharacter.ModifyLast(str, n);

            Assert.Equal(expected, actual);
        }
    }
}