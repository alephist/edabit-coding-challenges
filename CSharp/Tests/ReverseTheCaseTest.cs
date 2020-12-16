using Xunit;

namespace CSharp.Tests
{
    public class ReverseTheCaseTest
    {
        [Theory]
        [InlineData("Happy Birthday", "hAPPY bIRTHDAY")]
        [InlineData("MANY THANKS", "many thanks")]
        [InlineData("sPoNtAnEoUs", "SpOnTaNeOuS")]
        [InlineData("eXCELLENT, yOuR mAJESTY", "Excellent, YoUr Majesty")]
        public void ReverseCase_StringInputValue_ReturnStringWithCharactersChangedCase(string str, string expected)
        {
            var actual = ReverseTheCase.ReverseCase(str);

            Assert.Equal(expected, actual);
        }
    }
}