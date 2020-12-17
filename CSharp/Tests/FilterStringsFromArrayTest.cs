using System.Collections.Generic;
using Xunit;

namespace CSharp.Tests
{
    public class FilterStringsFromArrayTest
    {
        [Theory]
        [MemberData(nameof(TestObjectArrayData))]
        public void FilterArray_ObjectArrayInput_ReturnIntArray(object[] arr, int[] expected)
        {
            var actual = FilterStringsFromArray.FilterArray(arr);

            Assert.Equal(expected, actual);
        }

        public static IEnumerable<object[]> TestObjectArrayData
        {
            get
            {
                return new[]
                {
                    new object[] { new object[] { 1, 2, "a", "b" }, new int[] { 1, 2 } },
                    new object[] { new object[] { 1, "a", "b", 0, 15 }, new int[] { 1, 0, 15 } },
                    new object[] { new object[] { 1, 2, "aasf", "1", "123", 123 }, new int[] { 1, 2, 123 } },
                    new object[] { new object[] { "jsyt", 4, "yt", 6 }, new int[] { 4,6 } },
                    new object[] { new object[] { "r", 5, "y", "e", 8, 9 }, new int[] { 5, 8, 9 } },
                    new object[] { new object[] { "a", "e", "i", "o", "u" }, new int[] {  } },
                    new object[] { new object[] { 4, "z", "f", 5 }, new int[] { 4, 5 } },
                    new object[] { new object[] { "abc", 123 }, new int[] { 123 } },
                    new object[] { new object[] { "$%^", 567, "&&&" }, new int[] { 567 } },
                    new object[] { new object[] { "w", "r", "u", 43, "s", "a", 76, "d", 88 }, new int[] { 43, 76, 88 } }
                };
            }
        }
    }
}