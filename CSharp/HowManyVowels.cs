using System.Text.RegularExpressions;

namespace CSharp
{
    // Create a function that takes a string and returns the number (count) of vowels contained within it.
    // https://edabit.com/challenge/5ytLyHsZHfyDhBgXr
    public static class HowManyVowels
    {
        public static int CountVowels(string str) => Regex.Matches(str, "[aeiou]").Count;
    }
}