using System.Linq;

namespace CSharp
{
    // Create a function that takes an array and returns the difference between the biggest and smallest numbers.
    // https://edabit.com/challenge/8B2kZij5Ti8mfDSWR
    public static class MaxMinNumberArray
    {
        public static int DiffMaxMin(int[] arr) => arr.Max() - arr.Min();
    }
}