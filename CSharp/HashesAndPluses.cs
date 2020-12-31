using System.Text.RegularExpressions;

namespace CSharp
{
    // Create a function that returns the number of hashes and pluses in a string.
    // https://edabit.com/challenge/bhABvXWDsKSBjD5HR
    public static class HashesAndPluses
    {
        public static int[] HashPlusCount(string str) =>
            new int[] { Regex.Matches(str, @"\#").Count, Regex.Matches(str, @"\+").Count };
    }
}