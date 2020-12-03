using System;

namespace CSharp
{
    // Write a function to reverse an array.
    // https://edabit.com/challenge/p2dKTXbYogewspZ2m
    public static class ReverseAnArray
    {
        public static int[] Reverse(int[] arr)
        {
            Array.Reverse(arr);

            return arr;
        }
    }
}