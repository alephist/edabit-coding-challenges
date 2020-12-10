using System.Linq;

namespace CSharp
{
    // Create a function that takes an array as an argument and returns true or false 
    // depending on whether the average of all elements in the array is a whole number or not.
    // https://edabit.com/challenge/mDNt9RaNdcZwj6xNX
    public static class AverageOfAllElementsAsWholeNumber
    {
        public static bool IsAvgWhole(int[] arr) => arr.Sum() % arr.Length == 0;
    }
}