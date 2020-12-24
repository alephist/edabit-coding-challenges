namespace CSharp
{
    // Create a function that returns the string "Burp" with the amount of "r's" 
    // determined by the input parameters of the function.
    // https://edabit.com/challenge/xFaPak5hmiR3vpH6M
    public static class Burp
    {
        public static string LongBurp(int num = 1) => $"Bu{new string('r', num)}p";
    }
}