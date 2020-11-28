using System;

namespace CSharp
{
    // Create a function that finds the index of a given item.
    // https://edabit.com/challenge/L7AwDimWQppT25he6
    public static class FindTheIndex
    {
        public static int Search(int[] arr, int item) => Array.IndexOf(arr, item);
    }
}