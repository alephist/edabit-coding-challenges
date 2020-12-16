using System.Linq;

namespace CSharp
{
    // Given a string, create a function to reverse the case. 
    // All lower-cased letters should be upper-cased, and vice versa.
    // https://edabit.com/challenge/99oN5igrbXddAjHEL
    public static class ReverseTheCase
    {
        public static string ReverseCase(string str) => new string(str.ToCharArray().Select(ReverseCharCase).ToArray());

        private static char ReverseCharCase(char c) => char.IsUpper(c) ? char.ToLower(c) : char.ToUpper(c);
    }
}