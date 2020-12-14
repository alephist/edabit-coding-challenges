using System;
using System.Linq;

namespace CSharp
{
    // You will be implementing a basic case of the map-reduce pattern in programming. 
    // Given a vector stored as an array of numbers, find the magnitude of the vector. 
    // Use the standard distance formula for n-dimensional Cartesian coordinates.
    // https://edabit.com/challenge/DYNxn8fpWHutWZxEZ
    public static class MapReducePattern
    {
        public static double GetMagnitude(int[] arr)
        {
            if (arr.Length == 0) return 0;

            var sumOfSquares = arr.Select(num => Math.Pow(num, 2)).Aggregate((x, y) => x + y);

            return Math.Sqrt(sumOfSquares);
        }
    }
}