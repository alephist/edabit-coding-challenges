using Xunit;

namespace CSharp.Tests
{
    public class CountSyllablesTest
    {
        [Theory]
        [InlineData("buf-fet", 2)]
        [InlineData("beau-ti-ful", 3)]
        [InlineData("mon-u-men-tal", 4)]
        [InlineData("on-o-mat-o-poe-ia", 6)]
        [InlineData("o-ver-ly", 3)]
        [InlineData("pas-try", 2)]
        [InlineData("flu-id", 2)]
        [InlineData("syl-la-ble", 3)]
        public void Count_StringValue_ReturnSyllableCount(string word, int expected)
        {
            var actual = CountSyllables.Count(word);

            Assert.Equal(expected, actual);
        }
    }
}