namespace CSharp
{
    // Create a function that takes an array of numbers and return the first and last elements as a new array.
    // https://edabit.com/challenge/ee83ZNHoopsbEHidP
    public static class FirstLastElements
    {
        public static object[] FirstLast(object[] arr) => new object[] { arr[0], arr[arr.Length - 1] };
    }
}