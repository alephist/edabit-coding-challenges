using System;

namespace CSharp
{
    // Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
    // https://edabit.com/challenge/ghJ7G5jtKprtjfep2
    public static class EvenDivision
    {
        public static bool DividesEvenly(int a, int b)
        {
            if (a < b) throw new ArgumentException("a must be greater than b");

            return a % b == 0;
        }
    }
}