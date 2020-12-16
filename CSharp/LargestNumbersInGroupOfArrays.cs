using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of arrays with numbers. 
    // Return a new (single) array with the largest numbers of each.
    // https://edabit.com/challenge/nermqxzovZbfFBC9X
    public static class LargestNumbersInGroupOfArrays
    {
        public static double[] FindLargest(double[][] values) => values.Select(item => item.Max()).ToArray();
    }
}