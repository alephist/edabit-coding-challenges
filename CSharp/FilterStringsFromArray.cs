using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of non-negative integers and strings 
    // and return a new array without the strings.
    // https://edabit.com/challenge/4eSei6t8emzpyMwvu
    public static class FilterStringsFromArray
    {
        public static int[] FilterArray(object[] arr) => arr.OfType<int>().ToArray();
    }
}