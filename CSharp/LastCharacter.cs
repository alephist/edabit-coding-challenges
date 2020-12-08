namespace CSharp
{
    // Create a function which makes the last character of a string repeat n number of times.
    // https://edabit.com/challenge/ZCAugLuYPbzcC4Eos
    public static class LastCharacter
    {
        public static string ModifyLast(string str, int n) => $"{str}{new string(str[str.Length - 1], n - 1)}";
    }
}