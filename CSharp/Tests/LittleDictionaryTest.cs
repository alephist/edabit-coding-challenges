using Xunit;

namespace CSharp.Tests
{
    public class LittleDictionaryTest
    {
        [Theory]
        [InlineData("bu", new string[] { "button", "breakfast", "border" }, new string[] { "button" })]
        [InlineData("beau", new string[] { "pastry", "delicious", "name", "boring" }, new string[] { })]
        [InlineData("there", new string[] { "there", "here", "everywhere" }, new string[] { "there" })]
        [InlineData("sno", new string[] { "snow", "paper", "ghost" }, new string[] { "snow" })]
        [InlineData("ma", new string[] { "marriage", "married", "many", "delight" }, new string[] { "marriage", "married", "many" })]
        [InlineData("no", new string[] { "inferno", "notion", "nominate", "note", "fairy" }, new string[] { "notion", "nominate", "note" })]
        [InlineData("cre", new string[] { "creating", "creature", "creed", "increasing" }, new string[] { "creating", "creature", "creed" })]
        public void Dictionary_StringInputAndStringArray_ReturnStringsThatStartWithInitialWord(string initial, string[] words, string[] expected)
        {
            var actual = LittleDictionary.Dictionary(initial, words);

            Assert.Equal(expected, actual);
        }
    }
}