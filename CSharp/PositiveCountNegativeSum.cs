using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of positive and negative numbers. 
    // Return an array where the first element is the count of positive numbers 
    // and the second element is the sum of negative numbers.
    // https://edabit.com/challenge/SXeEZPxDM9Y5HzLvw
    public static class PositiveCountNegativeSum
    {
        public static int[] CountPosSumNeg(double[] arr)
        {
            if (arr.Length == 0) return new int[0];

            var posCount = arr.Where(num => num > 0).ToArray().Count();
            var negSum = (int)arr.Where(num => num < 1).Sum();

            return new int[] { posCount, negSum };
        }
    }
}