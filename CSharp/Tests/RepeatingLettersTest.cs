using Xunit;

namespace CSharp.Tests
{
    public class RepeatingLettersTest
    {
        [Theory]
        [InlineData("String", "SSttrriinngg")]
        [InlineData("Hello World!", "HHeelllloo  WWoorrlldd!!")]
        [InlineData("1234!_ ", "11223344!!__  ")]
        [InlineData("##^&%%*&%%$#@@!", "####^^&&%%%%**&&%%%%$$##@@@@!!")]
        [InlineData("scandal", "ssccaannddaall")]
        [InlineData("economics", "eeccoonnoommiiccss")]
        [InlineData(" ", "  ")]
        [InlineData("_______", "______________")]
        [InlineData("equip gallon read", "eeqquuiipp  ggaalllloonn  rreeaadd")]
        [InlineData("baby increase", "bbaabbyy  iinnccrreeaassee")]
        public void DoubleChar_StringInputValue_ReturnStringWithEachCharacterRepeated(string str, string expected)
        {
            var actual = RepeatingLetters.DoubleChar(str);

            Assert.Equal(expected, actual);
        }
    }
}