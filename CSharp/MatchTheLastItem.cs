using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of items and checks if the last item 
    // matches the rest of the array concatenated together.
    // https://edabit.com/challenge/jbR9NupEL8zAZkbKx
    public static class MatchTheLastItem
    {
        public static bool MatchLastItem(object[] arr) =>
            string.Concat(arr.Take(arr.Length - 1).ToArray()) == (string)arr[arr.Length - 1];
    }
}