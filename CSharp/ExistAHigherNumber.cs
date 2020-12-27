using System.Linq;

namespace CSharp
{
    // Write a function that returns true if there exists at least one number that is larger than or equal to n.
    // https://edabit.com/challenge/77zq4RhMgWup22H6d
    public static class ExistAHigherNumber
    {
        public static bool ExistHigher(int[] arr, int n) => arr.Any(item => item >= n);
    }
}