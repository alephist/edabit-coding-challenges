using System.Linq;

namespace CSharp
{
    // Create a function that takes an initial word and extracts any words that start 
    // with the same letters as the initial word.
    // https://edabit.com/challenge/p5xNwq2v9ZX7vo3mb
    public static class LittleDictionary
    {
        public static string[] Dictionary(string initial, string[] words) =>
            words.Where(word => word.StartsWith(initial)).ToArray();
    }
}