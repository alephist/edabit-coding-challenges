using System.Collections.Generic;
using Xunit;

namespace CSharp.Tests
{
    public class FetchInfoOnSportsPlayerTest
    {
        [Theory]
        [MemberData(nameof(PlayerData))]
        public void FetchPlayerInfo_PlayerClassInput_ReturnInfoStrings(Player player, string ageInfo, string heightInfo, string weightInfo)
        {
            var playerInfo = new FetchInfoOnSportsPlayer(player);
            var actualAgeInfo = playerInfo.GetAge();
            var actualHeightInfo = playerInfo.GetHeight();
            var actualWeightInfo = playerInfo.GetWeight();

            Assert.Equal(ageInfo, actualAgeInfo);
            Assert.Equal(heightInfo, actualHeightInfo);
            Assert.Equal(weightInfo, actualWeightInfo);
        }

        public static IEnumerable<object[]> PlayerData
        {
            get
            {
                return new[]
                {
                    new object[] { new Player("Patrick Mahomes", 24, 188, 104), "Patrick Mahomes is age 24", "Patrick Mahomes is 188cm", "Patrick Mahomes weighs 104kg" },

                    new object[] { new Player("Jimmy Garoppolo", 28, 188, 102), "Jimmy Garoppolo is age 28", "Jimmy Garoppolo is 188cm", "Jimmy Garoppolo weighs 102kg" },

                    new object[] { new Player("Julio Jones", 31, 191, 100), "Julio Jones is age 31", "Julio Jones is 191cm", "Julio Jones weighs 100kg" }
                };
            }
        }
    }
}