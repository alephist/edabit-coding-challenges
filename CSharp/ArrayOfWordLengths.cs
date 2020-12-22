using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of words and transforms it into an array of each word's length.
    // https://edabit.com/challenge/B9yPEStmax7Jxb9Dj
    public static class ArrayOfWordLengths
    {
        public static int[] WordLengths(string[] arr) => arr.Select(word => word.Length).ToArray();
    }
}