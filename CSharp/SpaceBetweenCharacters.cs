namespace CSharp
{
    // Create a function that takes a string and returns a string with spaces in between all of the characters.
    // https://edabit.com/challenge/jh6BWPukQ3wRshbRR
    public static class SpaceBetweenCharacters
    {
        public static string SpaceMeOut(string str) => string.Join(" ", str.ToCharArray());
    }
}