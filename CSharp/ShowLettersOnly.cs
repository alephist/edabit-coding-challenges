using System.Linq;

namespace CSharp
{
    // Write a function that removes any non-letters from a string, returning a well-known film title.
    // https://edabit.com/challenge/moqcQ563NukBBbKDL
    public static class ShowLettersOnly
    {
        public static string LettersOnly(string str)
        {
            var letters = str.ToCharArray().Where(char.IsLetter).ToArray();

            return new string(letters);
        }
    }
}