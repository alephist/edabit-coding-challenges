using Xunit;

namespace CSharp.Tests
{
    public class MaximumPossibleTotalTest
    {
        [Theory]
        [InlineData(new int[] { 1, 1, 0, 1, 3, 10, 10, 10, 10, 1 }, 43)]
        [InlineData(new int[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 100 }, 100)]
        [InlineData(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }, 40)]
        [InlineData(new int[] { 12, 8, 73, 1, 24, 11, 88, 39, 2, -47 }, 236)]
        [InlineData(new int[] { 48, 90, 42, -12, 1, -14, -36, -37, -9, -4 }, 177)]
        [InlineData(new int[] { -99, -38, -13, -84, 66, 13, -13, -16, 14, 15 }, 95)]
        [InlineData(new int[] { 60, -70, -53, -4, 53, -66, 10, -7, 56, 89 }, 268)]
        [InlineData(new int[] { 88, 45, 76, 34, -42, 10, -22, 85, -52, 49 }, 343)]
        [InlineData(new int[] { 70, -74, 20, -56, -15, 93, -75, 98, 46, 36 }, 343)]
        [InlineData(new int[] { -20, -61, 50, 52, 60, -70, 0, 69, 91, -36 }, 322)]
        [InlineData(new int[] { 31, 75, 78, 76, -51, -8, 17, -23, 34, 100 }, 363)]
        [InlineData(new int[] { -79, 85, 55, -5, -86, -72, 31, -68, 13, 1 }, 185)]
        [InlineData(new int[] { -93, -79, -26, 53, 74, -55, 68, -36, -6, -94 }, 163)]
        [InlineData(new int[] { -100, 21, 22, 65, 19, 2, -11, 3, 24, 73 }, 205)]
        [InlineData(new int[] { 92, -43, 80, 43, 23, -41, -19, 90, 78, 31 }, 383)]
        [InlineData(new int[] { -71, -11, -89, 60, 71, -62, 54, 11, 73, 49 }, 307)]
        [InlineData(new int[] { 61, -55, 60, -30, 27, 61, -68, -1, -36, -27 }, 208)]
        [InlineData(new int[] { 67, -44, 40, -75, 27, 71, -59, 4, 45, -91 }, 250)]
        [InlineData(new int[] { 27, -61, 81, -28, 5, 45, -81, 37, 30, 36 }, 229)]
        [InlineData(new int[] { 42, 34, -11, -41, -73, 53, 52, 34, 63, -15 }, 244)]
        [InlineData(new int[] { -89, 51, -24, -12, 26, 52, -98, -14, -99, 85 }, 202)]
        [InlineData(new int[] { -77, 24, 83, -67, -5, 58, -64, 21, 86, 41 }, 292)]
        [InlineData(new int[] { -69, 74, -78, 56, -9, -28, 39, 54, -74, 30 }, 253)]
        [InlineData(new int[] { 70, -25, 78, -58, -49, -42, -77, -52, 93, -37 }, 179)]
        [InlineData(new int[] { -30, -29, 32, -60, 84, -13, 67, -77, 94, 64 }, 341)]
        [InlineData(new int[] { -54, 7, 18, 83, -45, 68, 0, 78, 55, -30 }, 302)]
        [InlineData(new int[] { -81, -51, 63, 94, 22, -91, -75, 75, 28, -97 }, 282)]
        [InlineData(new int[] { 69, -34, -94, -50, -94, -38, -73, 33, 39, -99 }, 69)]
        [InlineData(new int[] { -60, -69, -55, -69, 5, 14, 97, 59, 93, 15 }, 278)]
        [InlineData(new int[] { 48, 77, -31, 74, 39, 8, -22, 24, 87, 10 }, 325)]
        [InlineData(new int[] { 56, 24, 46, 28, 61, 38, -32, 85, -36, -80 }, 286)]
        [InlineData(new int[] { -73, 72, 94, -5, 72, 0, 30, -93, -24, -10 }, 268)]
        [InlineData(new int[] { -48, 75, 31, -31, 29, 74, -56, -14, 7, -55 }, 216)]
        [InlineData(new int[] { -11, -92, 89, -23, -67, 45, 89, 10, -28, 76 }, 309)]
        [InlineData(new int[] { 37, -9, -27, -71, 62, 25, -55, 50, -56, -41 }, 165)]
        [InlineData(new int[] { 45, -34, 48, 19, 92, 73, -72, 67, 92, -32 }, 372)]
        [InlineData(new int[] { -26, -1, -37, 25, 4, -42, -44, -59, 83, 27 }, 138)]
        [InlineData(new int[] { -44, 92, -98, -8, -88, -65, 56, 66, -64, 35 }, 241)]
        [InlineData(new int[] { 45, -12, -73, 1, -6, -75, 94, 41, -7, -67 }, 175)]
        [InlineData(new int[] { 68, -27, -25, -54, -65, -20, 97, 61, 69, 31 }, 326)]
        [InlineData(new int[] { 11, -14, -9, -32, 79, -62, 81, -78, 62, -91 }, 224)]
        [InlineData(new int[] { -6, -82, 41, -44, 12, -10, 48, 84, 2, -18 }, 187)]
        [InlineData(new int[] { 8, -4, 19, -81, 26, -10, -96, 47, 50, 64 }, 206)]
        [InlineData(new int[] { 1, -98, 69, -46, -88, 12, 23, 85, 6, -18 }, 195)]
        [InlineData(new int[] { 65, 46, 62, 62, 0, -79, -35, -53, 43, 73 }, 308)]
        [InlineData(new int[] { 38, 8, 48, -1, -52, -22, 12, -61, -90, 9 }, 115)]
        [InlineData(new int[] { -48, 74, 81, -66, 33, -89, 16, 13, -82, 37 }, 241)]
        [InlineData(new int[] { -88, 3, 30, -16, 57, 17, -46, 26, -33, -55 }, 133)]
        [InlineData(new int[] { 4, -8, 28, 100, 71, -10, 7, 36, -57, 18 }, 253)]
        [InlineData(new int[] { -41, 73, 25, -55, 78, -76, -77, -80, 70, 78 }, 324)]
        [InlineData(new int[] { 3, -84, -65, -38, 80, -57, -75, -42, 87, -23 }, 109)]
        [InlineData(new int[] { -92, -18, 28, -63, 99, -80, -89, 89, -95, -27 }, 171)]
        [InlineData(new int[] { 32, -100, 29, -81, 14, 19, 23, -10, 55, -57 }, 158)]
        public void MaxTotal_IntArray_ReturnSumOfFiveLargestNumbers(int[] nums, int expected)
        {
            var actual = MaximumPossibleTotal.MaxTotal(nums);

            Assert.Equal(expected, actual);
        }
    }
}