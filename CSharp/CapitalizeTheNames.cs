using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of names and returns an array where only 
    // the first letter of each name is capitalized.
    // https://edabit.com/challenge/AafHF2YMGCqDRWERo
    public static class CapitalizeTheNames
    {
        public static string[] CapMe(string[] arr) =>
            arr.Select(name => $"{name.Substring(0, 1).ToUpper()}{name.Substring(1).ToLower()}").ToArray();
    }
}