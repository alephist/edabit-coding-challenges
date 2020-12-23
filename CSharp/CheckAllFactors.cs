using System.Linq;

namespace CSharp
{
    // Write a function that returns true if all integers in an array are factors of a number, and false otherwise.
    // https://edabit.com/challenge/k5k3aXWp7aibft74n
    public static class CheckAllFactors
    {
        public static bool CheckFactors(int[] factors, int num) => factors.All(i => num % i == 0);
    }
}