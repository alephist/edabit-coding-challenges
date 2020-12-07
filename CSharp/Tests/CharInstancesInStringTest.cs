using Xunit;

namespace CSharp.Tests
{
    public class CharInstancesInStringTest
    {
        [Theory]
        [InlineData('a', "edabit", 1)]
        [InlineData('b', "big fat bubble", 4)]
        [InlineData('c', "Chamber of secrets", 1)]
        [InlineData('f', "frank and his friends have offered five foxes for sale", 7)]
        [InlineData('x', "edabit", 0)]
        [InlineData('a', "Adam and Eve bit the apple and found a snake", 6)]
        [InlineData('s', "sssssssssssssssssssssssss", 25)]
        [InlineData('7', "10795426697", 2)]
        public void CharCount_StringAndCharInputs_ReturnCountOfCharacterInString(char myChar, string str, int expected)
        {
            var actual = CharInstancesInString.CharCount(myChar, str);

            Assert.Equal(expected, actual);
        }
    }
}