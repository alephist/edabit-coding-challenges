using Xunit;

namespace CSharp.Tests
{
    public class MatchTheLastItemTest
    {
        [Theory]
        [InlineData(new object[] { "rsq", "6hi", "g", "rsq6hig" }, true)]
        [InlineData(new object[] { 0, 1, 2, 3, 4, 5, "12345" }, false)]
        [InlineData(new object[] { "for", "mi", "da", "bel", "formidable" }, false)]
        [InlineData(new object[] { 8, "thunder", true, "8thunderTrue" }, true)]
        [InlineData(new object[] { 1, 1, 1, "11" }, false)]
        [InlineData(new object[] { "tocto", "G8G", "xtohkgc", "3V8", "ctyghrs", 100.88, "fyuo", "Q", "toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ" }, true)]
        public void MatchLastItem_ObjectArrayInput_ReturnBooleanIfLastItemMatchOtherElementsConcatenated(object[] arr, bool expected)
        {
            var actual = MatchTheLastItem.MatchLastItem(arr);

            Assert.Equal(expected, actual);
        }
    }
}