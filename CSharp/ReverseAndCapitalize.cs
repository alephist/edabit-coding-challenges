using System.Linq;

namespace CSharp
{
    // Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
    // https://edabit.com/challenge/rMGErLnrGdDXWZJF5
    public static class ReverseAndCapitalize
    {
        public static string ReverseCapitalize(string str) => new string(str.ToUpper().ToCharArray().Reverse().ToArray());
    }
}