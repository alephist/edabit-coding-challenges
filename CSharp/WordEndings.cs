namespace CSharp
{
    // Create a function that adds a string ending to each member in an array.
    // https://edabit.com/challenge/pxFc4J7aetiemv6Fv
    public static class WordEndings
    {
        public static string[] AddEnding(string[] arr, string ending)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                arr[i] = arr[i] + ending;
            }

            return arr;
        }
    }
}