using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of numbers and returns only the even values.
    // https://edabit.com/challenge/HkKNhhdfEGwxm9Fq6
    public static class EliminateOddNumbers
    {
        public static int[] NoOdds(int[] arr) => arr.Where(num => num % 2 == 0).ToArray();
    }
}