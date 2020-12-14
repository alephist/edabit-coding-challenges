using Xunit;

namespace CSharp.Tests
{
    public class MapReducePatternTest
    {
        [Theory]
        [InlineData(new int[] { 3, 4 }, 5)]
        [InlineData(new int[] { 0, 0, -10 }, 10)]
        [InlineData(new int[] { }, 0)]
        [InlineData(new int[] { 2, 3, 6, 1, 8 }, 10.677078252031311)]
        [InlineData(new int[] { 9, -9, 3 }, 13.076696830622021)]
        [InlineData(new int[] { -24, 94, 4, 0, 10 }, 97.61147473529944)]
        public void GetMagnitude_IntArrayInput_ReturnMagnitudeOfVector(int[] arr, double expected)
        {
            var actual = MapReducePattern.GetMagnitude(arr);

            Assert.Equal(expected, actual);
        }
    }
}