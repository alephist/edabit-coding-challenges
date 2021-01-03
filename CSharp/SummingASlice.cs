using System.Linq;

namespace CSharp
{
    // Given an array and an integer n, return the sum of the first n numbers in the array.
    // https://edabit.com/challenge/B3FR3P7g8NyTg7t8b
    public static class SummingASlice
    {
        public static int SliceSum(int[] arr, int n) =>
            n > arr.Length ? arr.Aggregate(0, (a, b) => a + b) : arr.Take(n).Aggregate(0, (a, b) => a + b);
    }
}