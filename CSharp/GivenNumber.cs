using System.Linq;

namespace CSharp
{
    // Write a method to check if an array contains a particular number.
    // https://edabit.com/challenge/cLSd8od6Xv9F3mZgx
    public static class GivenNumber
    {
        public static bool Check(int[] arr, int item) => arr.Contains(item);
    }
}