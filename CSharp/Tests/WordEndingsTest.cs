using Xunit;

namespace CSharp.Tests
{
    public class WordEndingsTest
    {
        [Theory]
        [InlineData(new string[] { "clever", "meek", "hurried", "nice" }, "ly", new string[] { "cleverly", "meekly", "hurriedly", "nicely" })]
        [InlineData(new string[] { "new", "pander", "scoop" }, "er", new string[] { "newer", "panderer", "scooper" })]
        [InlineData(new string[] { "bend", "sharpen", "mean" }, "ing", new string[] { "bending", "sharpening", "meaning" })]
        [InlineData(new string[] { "bend", "tooth", "mint" }, "y", new string[] { "bendy", "toothy", "minty" })]
        [InlineData(new string[] { "bend", "tooth", "mint" }, "ier", new string[] { "bendier", "toothier", "mintier" })]
        public void AddEnding_StringArrayAndStringEnding_ReturnStringArrayWithEndingOnEachElement(string[] arr, string ending, string[] expected)
        {
            var actual = WordEndings.AddEnding(arr, ending);

            Assert.Equal(expected, actual);
        }
    }
}