using Xunit;

namespace CSharp.Tests
{
    public class FirstLastElementsTest
    {
        [Theory]
        [InlineData(new object[] { 5, 10, 15, 20, 25 }, new object[] { 5, 25 })]
        [InlineData(new object[] { "edabit", 13, null, false, true }, new object[] { "edabit", true })]
        [InlineData(new object[] { "", 4, "6", "hello", null }, new object[] { "", null })]
        [InlineData(new object[] { "hello", "edabit", "dot", "com" }, new object[] { "hello", "com" })]
        [InlineData(new object[] { 3, 2, 1 }, new object[] { 3, 1 })]
        [InlineData(new object[] { "one", "two" }, new object[] { "one", "two" })]
        [InlineData(new object[] { false, false, true, false, false, true, false }, new object[] { false, false })]
        public void FirstLast_ObjectArray_ReturnFirstAndLastElementsInAnObjectArray(object[] arr, object[] expected)
        {
            var actual = FirstLastElements.FirstLast(arr);

            Assert.Equal(expected, actual);
        }
    }
}