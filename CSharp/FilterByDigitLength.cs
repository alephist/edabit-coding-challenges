using System.Linq;

namespace CSharp
{
    // Create a function that filters out an array to include numbers that only have a certain number of digits.
    // https://edabit.com/challenge/RXNybvGHLuvFiWKvq
    public static class FilterByDigitLength
    {
        public static int[] FilterDigitLength(int[] arr, int num) => arr.Where(i => i.ToString().Length == num).ToArray();
    }
}