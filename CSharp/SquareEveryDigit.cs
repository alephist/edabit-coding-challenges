using System;
using System.Linq;

namespace CSharp
{
    // Create a function that squares every digit of a number.
    // https://edabit.com/challenge/Tnjbf6pdFsCjmaF8p
    public static class SquareEveryDigit
    {
        public static int SquareDigits(int num)
        {
            var squaredDigits = num
                                    .ToString()
                                    .ToCharArray()
                                    .Select(Char.GetNumericValue)
                                    .Select(i => (i * i).ToString())
                                    .Aggregate("", (a, b) => a + b);

            return int.Parse(squaredDigits);
        }
    }
}