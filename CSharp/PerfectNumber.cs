using System.Linq;

namespace CSharp
{
    // Create a function that tests whether or not an integer is a perfect number. 
    // A perfect number is a number that can be written as the sum of its factors, 
    // (equal to sum of its proper divisors) excluding the number itself.
    // For example, 6 is a perfect number, since 1 + 2 + 3 = 6, where 1, 2, and 3 are all factors of 6. 
    // Similarly, 28 is a perfect number, since 1 + 2 + 4 + 7 + 14 = 28.
    // https://edabit.com/challenge/5B4jvew2NvzKhfcQv
    public static class PerfectNumber
    {
        public static bool CheckPerfect(int num) => num == Enumerable.Range(1, num - 1).Where(i => num % i == 0).Sum();
    }
}