using System.Linq;

namespace CSharp
{
    // Create a function that takes a string as its argument and returns the string in reversed order.
    // https://edabit.com/challenge/pdHrsZMdhwYNEX3wY
    public static class ReverseStringOrder
    {
        public static string Reverse(string str) => new string(str.ToCharArray().Reverse().ToArray());
    }
}