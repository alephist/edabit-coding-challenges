using Xunit;

namespace CSharp.Tests
{
    public class BrokenBridgeTest
    {
        [Theory]
        [InlineData("####", true)]
        [InlineData("## ####", false)]
        [InlineData("#", true)]
        [InlineData("# #", false)]
        public void IsSafeBridge_StringValue_ReturnBoolean(string str, bool expected)
        {
            var actual = BrokenBridge.IsSafeBridge(str);

            Assert.Equal(expected, actual);
        }
    }
}