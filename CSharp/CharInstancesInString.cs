using System.Linq;

namespace CSharp
{
    // Create a function that takes a character and a string as arguments 
    // and returns the number of times the character is found in the string.
    // https://edabit.com/challenge/ptpBkzwCAgC6MJzGd
    public static class CharInstancesInString
    {
        public static int CharCount(char myChar, string str) => str.Where(ltr => ltr == myChar).ToArray().Length;
    }
}