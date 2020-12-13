using System.Linq;

namespace CSharp
{
    // A palindrome is a word that is identical forward and backwards (examples: mom, kayak, racecar).
    // Given a word, create a function that checks whether it is a palindrome.
    // https://edabit.com/challenge/sTTJNhDFDzCDxeiGZ
    public static class Palindrome
    {
        public static bool CheckPalindrome(string str) => str == new string(str.ToCharArray().Reverse().ToArray());
    }
}