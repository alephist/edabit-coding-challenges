namespace CSharp
{
    // Create a function that takes a string and returns a string in which each character is repeated once.
    // https://edabit.com/challenge/fKZHLzmR8anBrxgNt
    public static class RepeatingLetters
    {
        public static string DoubleChar(string str)
        {
            var result = "";

            for (var i = 0; i < str.Length; i++)
            {
                for (var j = 0; j < 2; j++)
                {
                    result += str[i];
                }
            }

            return result;
        }
    }
}