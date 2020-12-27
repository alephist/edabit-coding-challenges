using Xunit;

namespace CSharp.Tests
{
    public class SecretSocietyTest
    {
        [Theory]
        [InlineData(new string[] { "Adam", "Sarah", "Malcolm" }, "AMS")]
        [InlineData(new string[] { "Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey" }, "CJMPRR")]
        [InlineData(new string[] { "Harry", "Newt", "Luna", "Cho" }, "CHLN")]
        [InlineData(new string[] { "Sherlock", "Irene", "John" }, "IJS")]
        [InlineData(new string[] { "Sheldon", "Amy", "Penny", "Howard", "Raj" }, "AHPRS")]
        public void SocietyName_StringArrayOfFriendNames_ReturnSecretSocietyName(string[] friends, string expected)
        {
            var actual = SecretSociety.SocietyName(friends);

            Assert.Equal(expected, actual);
        }
    }
}