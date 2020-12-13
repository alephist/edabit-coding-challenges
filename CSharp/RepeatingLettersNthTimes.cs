namespace CSharp
{
    // Create a function that repeats each character in a string n times.
    // https://edabit.com/challenge/Lmhmtj3QZw9cF5Zew
    public static class RepeatingLettersNthTimes
    {
        public static string Repeat(string str, int num)
        {
            var result = string.Empty;

            for (int i = 0; i < str.Length; i++)
            {
                result += new string(str[i], num);
            }

            return result;
        }
    }
}