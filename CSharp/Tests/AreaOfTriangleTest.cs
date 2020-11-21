using Xunit;

namespace CSharp.Tests
{
    public class AreaOfTriangleTest
    {
        [Theory]
        [InlineData(3, 2, 3)]
        [InlineData(5, 4, 10)]
        [InlineData(10, 10, 50)]
        [InlineData(0, 60, 0)]
        [InlineData(12, 11, 66)]
        public void GetArea_IntBaseHeightValues_ReturnArea(int b, int h, int expected)
        {
            var actual = AreaOfTriangle.GetArea(b, h);

            Assert.Equal(expected, actual);
        }
    }
}