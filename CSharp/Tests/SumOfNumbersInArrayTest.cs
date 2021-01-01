using Xunit;

namespace CSharp.Tests
{
    public class SumOfNumbersInArrayTest
    {
        [Theory]
        [InlineData(new object[] { 1, 2, "13", "4", "645" }, 3)]
        [InlineData(new object[] { true, false, "123", "75" }, 0)]
        [InlineData(new object[] { 1, 2, 3, 4, 5, true }, 15)]
        [InlineData(new object[] { "abcd", 1234, false, true, 564, "hii" }, 1798)]
        [InlineData(new object[] { "abcd", "abc45", "assssd", true }, 0)]
        [InlineData(new object[] { }, 0)]
        [InlineData(new object[] { "cghyki", "cd", 12114, 786, true, "me", "bey" }, 12900)]
        public void NumbersSum_IntArrayInput_ReturnSumOfNumbersFromArray(object[] arr, int expected)
        {
            var actual = SumOfNumbersInArray.NumbersSum(arr);

            Assert.Equal(expected, actual);
        }
    }
}