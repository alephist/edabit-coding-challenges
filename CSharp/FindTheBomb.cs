namespace CSharp
{
    // Create a function that finds the word "bomb" in the given string. If found, return "Duck!!!", 
    // otherwise, return "There is no bomb, relax.".
    // https://edabit.com/challenge/JYEufqRvkusjr5R58
    public static class FindTheBomb
    {
        public static string Bomb(string txt) => txt.ToLower().Contains("bomb") ? "Duck!!!" : "There is no bomb, relax.";
    }
}