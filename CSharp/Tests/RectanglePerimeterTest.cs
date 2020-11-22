using Xunit;

namespace CSharp.Tests
{
    public class RectanglePerimeterTest
    {
        [Theory]
        [InlineData(6, 7, 26)]
        [InlineData(20, 10, 60)]
        [InlineData(2, 9, 22)]
        public void FindPerimeter_IntLengthAndWidthValues_ReturnIntPerimeter(int length, int width, int expected)
        {
            var actual = RectanglePerimeter.FindPerimeter(length, width);

            Assert.Equal(expected, actual);
        }
    }
}