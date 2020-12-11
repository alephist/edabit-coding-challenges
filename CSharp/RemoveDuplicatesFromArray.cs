using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of items, removes all duplicate items and 
    // returns a new array in the same sequential order as the old array (minus duplicates).
    // https://edabit.com/challenge/TofdXBRqnf7JFiZBC
    public static class RemoveDuplicatesFromArray
    {
        public static object[] RemoveDups(object[] arr) => arr.Distinct().ToArray();
    }
}