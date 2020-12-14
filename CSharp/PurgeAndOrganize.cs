using System.Linq;

namespace CSharp
{
    // Given an array of numbers, write a function that returns an array that
    // Has all duplicate elements removed
    // Is sorted from least value to greatest value
    // https://edabit.com/challenge/9Emx6unF8evWiXnJA
    public static class PurgeAndOrganize
    {
        public static double[] UniqueSort(double[] arr) => arr.Distinct().OrderBy(num => num).ToArray();
    }
}