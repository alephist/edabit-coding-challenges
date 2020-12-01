using Xunit;

namespace CSharp.Tests
{
    public class StringToIntegerViceVersaTest
    {
        [Theory]
        [InlineData("37", 37)]
        [InlineData("113", 113)]
        [InlineData("5", 5)]
        [InlineData("5231", 5231)]
        public void ToInt_StringInNumberFormat_ReturnIntFormatOfString(string str, int expected)
        {
            var actual = StringToIntegerViceVersa.ToInt(str);

            Assert.Equal(expected, actual);
        }

        [Theory]
        [InlineData(37, "37")]
        [InlineData(113, "113")]
        [InlineData(5, "5")]
        [InlineData(5231, "5231")]
        public void ToStr_NumberValue_ReturnStringFormatOfNumber(int num, string expected)
        {
            var actual = StringToIntegerViceVersa.ToStr(num);

            Assert.Equal(expected, actual);
        }
    }
}