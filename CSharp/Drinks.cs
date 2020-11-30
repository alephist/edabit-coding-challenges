namespace CSharp
{
    // A bartender is writing a simple program to determine whether he should serve drinks to someone. 
    // He only serves drinks to people 18 and older and when he's not on break.
    // Given the person's age, and whether break time is in session, 
    // create a function which returns whether he should serve drinks.
    // https://edabit.com/challenge/bzsF34gPLKKD7q7wi
    public static class Drinks
    {
        public static bool ShouldServeDrinks(int age, bool onBreak) => age >= 18 && !onBreak;
    }
}