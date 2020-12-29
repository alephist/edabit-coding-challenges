using System.Linq;

namespace CSharp
{
    // Return the sum of all items in an array, where each item is multiplied by its index (zero-based). 
    // For empty arrays, return 0.
    // https://edabit.com/challenge/3Efavz8YmSBia4p8s
    public static class IndexMultiplier
    {
        public static int MultiplyIndex(int[] arr) => arr.Select((num, i) => num * i).Aggregate(0, (a, b) => a + b);
    }
}