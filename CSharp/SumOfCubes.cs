using System;
using System.Linq;

namespace CSharp
{
    // Create a function that takes in an array of numbers and returns the sum of its cubes.
    // https://edabit.com/challenge/gojyHs5xGwpFtZfWK
    public static class SumOfCubes
    {
        public static int GetSum(int[] arr) => arr.Select(num => (int)Math.Pow(num, 3)).Sum();
    }
}