namespace CSharp
{
    // There is a single operator in C#, capable of providing the remainder of a division operation. 
    // Two numbers are passed as parameters. 
    // The first parameter divided by the second parameter will have a remainder, possibly zero. 
    // Return that value.
    // https://edabit.com/challenge/4p5WBxogs2ENAb4Wu
    public static class RemainderOfTwoNumbers
    {
        public static int GetRemainder(int x, int y) => x % y;
    }
}