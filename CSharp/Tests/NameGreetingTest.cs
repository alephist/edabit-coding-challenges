using Xunit;

namespace CSharp.Tests
{
    public class NameGreetingTest
    {
        [Theory]
        [InlineData("Gerald", "Hello Gerald!")]
        [InlineData("Fatima", "Hello Fatima!")]
        [InlineData("Ed", "Hello Ed!")]
        [InlineData("Tiffany", "Hello Tiffany!")]
        public void HelloName_StringValue_ReturnString(string name, string expected)
        {
            var actual = NameGreeting.HelloName(name);

            Assert.Equal(expected, actual);
        }
    }
}