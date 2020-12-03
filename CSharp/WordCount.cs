namespace CSharp
{
    // Create a function that takes a string and returns the word count. The string will be a sentence.
    // https://edabit.com/challenge/DgQSXRDzh6QgfzDW2
    public static class WordCount
    {
        public static int CountWords(string str) => str.Split(' ').Length;
    }
}