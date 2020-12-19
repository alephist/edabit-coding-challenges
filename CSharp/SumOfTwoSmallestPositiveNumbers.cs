using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
    // https://edabit.com/challenge/7F8ZhHpxeW7K65XRL
    public static class SumOfTwoSmallestPositiveNumbers
    {
        public static int SumSmallest(int[] values) => values.Where(num => num > 0).OrderBy(num => num).Take(2).Sum();
    }
}