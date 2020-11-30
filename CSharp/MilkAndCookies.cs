using System;

namespace CSharp
{
    // Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
    // Create a function that accepts year, month and day as integers and returns true if it's 
    // Christmas Eve (December 24th) and false otherwise.
    // https://edabit.com/challenge/BZYLkZCACxhm5JX4b
    public static class MilkAndCookies
    {
        public static bool TimeForMilkAndCookies(int year, int month, int day)
        {
            try
            {
                var date = new DateTime(year, month, day);
                return date.Month == 12 && date.Day == 24;
            }
            catch (ArgumentOutOfRangeException)
            {
                throw new ArgumentOutOfRangeException();
            }
        }
    }
}