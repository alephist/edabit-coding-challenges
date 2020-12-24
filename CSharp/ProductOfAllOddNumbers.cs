using System.Linq;

namespace CSharp
{
    // Create a function that returns the product of all odd integers in an array.
    // https://edabit.com/challenge/4LnwAC3kgTctc7r3k
    public static class ProductOfAllOddNumbers
    {
        public static int OddProduct(int[] arr) => arr.Where(num => num % 2 != 0).Aggregate((a, b) => a * b);
    }
}