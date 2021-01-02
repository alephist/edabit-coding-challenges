using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of numbers arr, a string str 
    // and return an array of numbers as per the following rules:
    // "Asc" returns a sorted array in ascending order.
    // "Des" returns a sorted array in descending order.
    // "None" returns an array without any modification.
    public static class SortThisArray
    {
        public static int[] AscDesNone(int[] arr, string str)
        {
            switch (str)
            {
                case "Asc":
                    return arr.OrderBy(num => num).ToArray();

                case "Des":
                    return arr.OrderByDescending(num => num).ToArray();

                default:
                    return arr;
            }
        }
    }
}