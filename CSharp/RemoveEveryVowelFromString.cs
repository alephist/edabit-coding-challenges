using System.Text.RegularExpressions;

namespace CSharp
{
    // Create a function that takes a string and returns a new string with all vowels removed.
    // https://edabit.com/challenge/HXsSRtx83xj7K94dW
    public static class RemoveEveryVowelFromString
    {
        public static string RemoveVowels(string str) => Regex.Replace(str, "[aeiou]", "", RegexOptions.IgnoreCase);
    }
}