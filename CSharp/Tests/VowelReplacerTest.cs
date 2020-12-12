using Xunit;

namespace CSharp.Tests
{
    public class VowelReplacerTest
    {
        [Theory]
        [InlineData("the aardvark", "#", "th# ##rdv#rk")]
        [InlineData("minnie mouse", "?", "m?nn?? m??s?")]
        [InlineData("shakespeare", "*", "sh*k*sp**r*")]
        public void ReplaceVowels_StringInputValueStringReplaceValue_ReturnStringWithVowelsReplacedWithInputCharacter(string str, string ch, string expected)
        {
            var actual = VowelReplacer.ReplaceVowels(str, ch);

            Assert.Equal(expected, actual);
        }
    }
}