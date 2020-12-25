using System.Linq;

namespace CSharp
{
    // Write a function that maps files to their extension names.
    // https://edabit.com/challenge/8A9E8LdE6zXcmPX3W
    public static class GetFileExtension
    {
        public static string[] GetExtension(string[] arr) => arr.Select(file => file.Split('.')[1]).ToArray();
    }
}