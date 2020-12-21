using System.Collections.Generic;
using Xunit;

namespace CSharp.Tests
{
    public class ExtractCityFactsTest
    {
        [Theory]
        [MemberData(nameof(CityData))]
        public void CityFacts_CityObjectInput_ReturnStringOfCityFacts(City city, string expected)
        {
            var actual = ExtractCityFacts.CityFacts(city);

            Assert.Equal(expected, actual);
        }

        public static IEnumerable<object[]> CityData
        {
            get
            {
                return new[]
                {
                    new object[] { new City("Manila", "1,780,148", "Asia"), "Manila has a population of 1,780,148 and is situated in Asia" },

                    new object[] { new City("Melbourne", "4,936,349", "Australia"), "Melbourne has a population of 4,936,349 and is situated in Australia" },

                    new object[] { new City("Kampala", "1,507,080", "Africa"), "Kampala has a population of 1,507,080 and is situated in Africa" },

                    new object[] { new City("Buenos Aires", "2,891,082", "South America"), "Buenos Aires has a population of 2,891,082 and is situated in South America"},

                    new object[] { new City("Vancouver", "631,486", "North America"), "Vancouver has a population of 631,486 and is situated in North America" },

                    new object[] { new City("Berlin", "3,748,148", "Europe"), "Berlin has a population of 3,748,148 and is situated in Europe" }
                };
            }
        }
    }
}