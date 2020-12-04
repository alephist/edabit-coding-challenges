namespace CSharp
{
    // Create a function to concatenate two integer arrays.
    // https://edabit.com/challenge/W2jY5dBC6dtkW5nPN
    public static class ConcatenateArrays
    {
        public static int[] Concat(int[] arr1, int[] arr2)
        {
            var result = new int[arr1.Length + arr2.Length];

            arr1.CopyTo(result, 0);
            arr2.CopyTo(result, arr1.Length);

            return result;
        }
    }
}