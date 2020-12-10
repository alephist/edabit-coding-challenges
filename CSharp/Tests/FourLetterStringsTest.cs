using Xunit;

namespace CSharp.Tests
{
    public class FourLetterStringsTest
    {
        [Theory]
        [InlineData(new string[] { "Ryan", "Kieran", "Jason", "Matt" }, new string[] { "Ryan", "Matt" })]
        [InlineData(new string[] { "Tomato", "Potato", "Pair" }, new string[] { "Pair" })]
        [InlineData(new string[] { "Kangaroo", "Bear", "Fox" }, new string[] { "Bear" })]
        [InlineData(new string[] { "Red", "Blue", "Green", "Pink" }, new string[] { "Blue", "Pink" })]
        [InlineData(new string[] { "is", "up", "two", "elephant" }, new string[] { })]
        [InlineData(new string[] { "jazz", "quiz", "jump" }, new string[] { "jazz", "quiz", "jump" })]
        [InlineData(new string[] { "" }, new string[] { })]
        [InlineData(new string[] { "Broccoli", "Carrot", "Spinach" }, new string[] { })]
        [InlineData(new string[] { }, new string[] { })]
        public void IsFourLetters_StringArrayValue_ReturnStringArrayWithElementsHavingFourLetters(string[] arr, string[] expected)
        {
            var actual = FourLetterStrings.IsFourLetters(arr);

            Assert.Equal(expected, actual);
        }
    }
}