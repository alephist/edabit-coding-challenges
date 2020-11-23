namespace CSharp
{
    // In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
    // The farmer breeds three species: chickens = 2 legs, cows = 4 legs, pigs = 4 legs
    // The farmer has counted his animals and he gives you a subtotal for each species. 
    // You have to implement a function that returns the total number of legs of all the animals.
    // https://edabit.com/challenge/4AaTbg5NuA8eSijcr
    public static class FarmProblem
    {
        public static int Animals(int chickens, int cows, int pigs) => (2 * chickens) + 4 * (cows + pigs);
    }
}