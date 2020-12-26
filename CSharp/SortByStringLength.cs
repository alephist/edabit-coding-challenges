using System.Linq;

namespace CSharp
{
    // Create a function that returns an array of strings sorted by length in ascending order.
    // https://edabit.com/challenge/aNZzLBxQpidWBF26X
    public static class SortByStringLength
    {
        public static string[] SortByLength(string[] arr) => arr.OrderBy(word => word.Length).ToArray();
    }
}