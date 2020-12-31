using System.Linq;

namespace CSharp
{
    // Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
    // https://edabit.com/challenge/Wg3pBiH8HQggcfaTg
    public static class MaximumPossibleTotal
    {
        public static int MaxTotal(int[] nums) => nums.OrderByDescending(i => i).Take(5).Sum();
    }
}