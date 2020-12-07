using System.Linq;

namespace CSharp
{
    // Create a function to multiply all of the values in an array by the amount of values in the given array.
    // https://edabit.com/challenge/WLH46r3aARtXXYKF6
    public static class MultiplyByLength
    {
        public static int[] MultiplyLength(int[] arr) => arr.Select(num => num * arr.Length).ToArray();
    }
}