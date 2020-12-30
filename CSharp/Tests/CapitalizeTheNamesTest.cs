using Xunit;

namespace CSharp.Tests
{
    public class CapitalizeTheNamesTest
    {
        [Theory]
        [InlineData(new string[] { "mavis", "senaida", "letty" }, new string[] { "Mavis", "Senaida", "Letty" })]
        [InlineData(new string[] { "samuel", "MABELLE", "letitia", "meridith" }, new string[] { "Samuel", "Mabelle", "Letitia", "Meridith" })]
        [InlineData(new string[] { "Slyvia", "Kristal", "Sharilyn", "Calista" }, new string[] { "Slyvia", "Kristal", "Sharilyn", "Calista" })]
        [InlineData(new string[] { "krisTopher", "olIva", "herminiA" }, new string[] { "Kristopher", "Oliva", "Herminia" })]
        [InlineData(new string[] { "luke", "marsha", "stanford" }, new string[] { "Luke", "Marsha", "Stanford" })]
        [InlineData(new string[] { "kara" }, new string[] { "Kara" })]
        [InlineData(new string[] { "mARIANN", "jOI", "gEORGEANN" }, new string[] { "Mariann", "Joi", "Georgeann" })]
        public void CapMe_NamesStringArray_ReturnNamesOnlyFirstLetterCapitalized(string[] arr, string[] expected)
        {
            var actual = CapitalizeTheNames.CapMe(arr);

            Assert.Equal(expected, actual);
        }
    }
}