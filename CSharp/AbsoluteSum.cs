using System;
using System.Linq;

namespace CSharp
{
    // Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
    // https://edabit.com/challenge/J3WGSreYhc65cWyrc
    public static class AbsoluteSum
    {
        public static int GetAbsoluteSum(int[] arr) => arr.Select(num => Math.Abs(num)).Sum();
    }
}