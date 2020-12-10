using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of strings and returns the words that are exactly four letters.
    // https://edabit.com/challenge/W4x4o2M7ny6Cqkfhn
    public static class FourLetterStrings
    {
        public static string[] IsFourLetters(string[] str) => str.Where(item => item.Length == 4).ToArray();
    }
}