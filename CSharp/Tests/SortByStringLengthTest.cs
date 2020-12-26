using Xunit;

namespace CSharp.Tests
{
    public class SortByStringLengthTest
    {
        [Theory]
        [InlineData(new string[] { "a", "ccc", "dddd", "bb" }, new string[] { "a", "bb", "ccc", "dddd" })]
        [InlineData(new string[] { "apple", "pie", "shortcake" }, new string[] { "pie", "apple", "shortcake" })]
        [InlineData(new string[] { "may", "april", "september", "august" }, new string[] { "may", "april", "august", "september" })]
        [InlineData(new string[] { "maybe" }, new string[] { "maybe" })]
        [InlineData(new string[] { }, new string[] { })]
        public void SortByLength_StringArrayInput_ReturnStringArraySortedByLength(string[] arr, string[] expected)
        {
            var actual = SortByStringLength.SortByLength(arr);

            Assert.Equal(expected, actual);
        }
    }
}