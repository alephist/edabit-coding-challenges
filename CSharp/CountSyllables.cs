namespace CSharp
{
    // Create a function that counts the number of syllables a word has. Each syllable is separated with a dash (-).
    // https://edabit.com/challenge/SB26jFMaQE6kf7gE5
    public static class CountSyllables
    {
        public static int Count(string word) => word.Split('-').Length;
    }
}