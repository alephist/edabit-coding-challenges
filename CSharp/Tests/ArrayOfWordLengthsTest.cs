using Xunit;

namespace CSharp.Tests
{
    public class ArrayOfWordLengthsTest
    {
        [Theory]
        [InlineData(new string[] { "hello", "world" }, new int[] { 5, 5 })]
        [InlineData(new string[] { "Halloween", "Thanksgiving", "Christmas" }, new int[] { 9, 12, 9 })]
        [InlineData(new string[] { "She", "sells", "seashells", "down", "by", "the", "seashore" }, new int[] { 3, 5, 9, 4, 2, 3, 8 })]
        [InlineData(new string[] { "Indiana", "Jones", "and", "the", "Temple", "of", "Doom" }, new int[] { 7, 5, 3, 3, 6, 2, 4 })]
        [InlineData(new string[] { "Programming", "is", "fun" }, new int[] { 11, 2, 3 })]
        public void WordLengths_StringArrayInput_ReturnArrayOfWordLengths(string[] arr, int[] expected)
        {
            var actual = ArrayOfWordLengths.WordLengths(arr);

            Assert.Equal(expected, actual);
        }
    }
}