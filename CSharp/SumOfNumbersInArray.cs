using System.Linq;

namespace CSharp
{
    // Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements 
    // in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
    // https://edabit.com/challenge/PWqkt9HiLcJSr6QEY
    public static class SumOfNumbersInArray
    {
        public static int NumbersSum(object[] arr) => arr.OfType<int>().Aggregate(0, (a, b) => a + b);
    }
}