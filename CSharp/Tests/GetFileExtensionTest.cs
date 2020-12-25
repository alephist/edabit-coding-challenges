using Xunit;

namespace CSharp.Tests
{
    public class GetFileExtensionTest
    {
        [Theory]
        [InlineData(new string[] { "project1.jpg", "project1.pdf", "project1.mp3" }, new string[] { "jpg", "pdf", "mp3" })]
        [InlineData(new string[] { "ruby.rb", "cplusplus.cpp", "python.py", "javascript.js" }, new string[] { "rb", "cpp", "py", "js" })]
        [InlineData(new string[] { "code.html", "code.css" }, new string[] { "html", "css" })]
        [InlineData(new string[] { "minesweeper.java", "game.java", "my_project.java" }, new string[] { "java", "java", "java" })]
        public void GetExtension_FileNameStringArrayInput_ReturnSringArrayOfExtensionNames(string[] arr, string[] expected)
        {
            var actual = GetFileExtension.GetExtension(arr);

            Assert.Equal(expected, actual);
        }
    }
}