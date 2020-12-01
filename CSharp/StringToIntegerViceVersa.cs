namespace CSharp
{
    // Write two functions:
    // ToInt() : A function to convert a string to an integer
    // ToStr() : A function to convert an integer to a string
    // https://edabit.com/challenge/h7j7rTifpx7tBbzGC
    public static class StringToIntegerViceVersa
    {
        public static int ToInt(string str) => int.Parse(str);

        public static string ToStr(int num) => num.ToString();
    }
}