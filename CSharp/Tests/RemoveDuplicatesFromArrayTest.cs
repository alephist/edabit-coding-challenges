using Xunit;

namespace CSharp.Tests
{
    public class RemoveDuplicatesFromArrayTest
    {
        [Theory]
        [InlineData(new object[] { "John", "Taylor", "John" }, new object[] { "John", "Taylor" })]
        [InlineData(new object[] { "John", "Taylor", "John", "john" }, new object[] { "John", "Taylor", "john" })]
        [InlineData(new object[] { "javascript", "python", "python", "ruby", "javascript", "c", "ruby" }, new object[] { "javascript", "python", "ruby", "c" })]
        [InlineData(new object[] { 1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5 }, new object[] { 1, 2, 3, 5, 6, 7 })]
        [InlineData(new object[] { "#", "#", "%", "&", "#", "$", "&" }, new object[] { "#", "%", "&", "$" })]
        [InlineData(new object[] { 3, "Apple", 3, "Orange", "Apple" }, new object[] { 3, "Apple", "Orange" })]
        public void RemoveDups_ObjectArrayInput_ReturnArrayWithDistinctValues(object[] arr, object[] expected)
        {
            var actual = RemoveDuplicatesFromArray.RemoveDups(arr);

            Assert.Equal(expected, actual);
        }
    }
}