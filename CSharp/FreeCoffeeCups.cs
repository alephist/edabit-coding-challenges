namespace CSharp
{
    // For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. 
    // Create a function that takes n cups bought and return the total number of cups I would get.
    // https://edabit.com/challenge/YwTM9ykfLskximA4h
    public static class FreeCoffeeCups
    {
        public static int TotalCups(int n) => n + (n / 6);
    }
}