using System.Text.RegularExpressions;

namespace CSharp
{
    // Create a function that replaces all the vowels in a string with a specified character.
    // https://edabit.com/challenge/jZKws3Rv2R3JphCWc
    public static class VowelReplacer
    {
        public static string ReplaceVowels(string str, string ch) => Regex.Replace(str, "[aeiou]", ch);
    }
}