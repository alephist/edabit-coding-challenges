using System.Linq;

namespace CSharp
{
    // Create a function that takes two numbers as arguments (num, length) 
    // and returns an array of multiples of num until the array length reaches length.
    // https://edabit.com/challenge/2QvnWexKoLfcJkSsc
    public static class ArrayOfMultiples
    {
        public static int[] GetMultiples(int num, int length) =>
            Enumerable.Range(1, length).Select(i => num * i).ToArray();
    }
}