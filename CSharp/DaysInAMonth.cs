using System;

namespace CSharp
{
    // Create a function that takes the month and year (as integers) and returns the number of days in that month.
    // https://edabit.com/challenge/TaWxNNHPHZmbMnBZx
    public static class DaysInAMonth
    {
        public static int GetDays(int month, int year) => DateTime.DaysInMonth(year, month);
    }
}