namespace CSharp
{
    // Write a function that stutters a word as if someone is struggling to read it. 
    // The first two letters are repeated twice with an ellipsis ... and space after each, 
    // and then the word is pronounced with a question mark ?.
    // https://edabit.com/challenge/Ty9u8onXNjDPdQGMo
    public static class StutteringFunction
    {
        public static string Stutter(string word)
        {
            var st = "";

            for (int i = 0; i < 2; i++)
            {
                st += word.Substring(0, 2) + "... ";
            }

            return $"{st}{word}?";
        }
    }
}