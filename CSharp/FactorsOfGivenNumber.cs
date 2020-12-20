using System.Linq;

namespace CSharp
{
    // Create a function that finds each factor of a given number n.
    // Your solution should return an array of the number(s) that meet this criteria.
    // https://edabit.com/challenge/WR3Q72Jbv7Kyzu6AT
    public static class FactorsOfGivenNumber
    {
        public static int[] FindFactors(int num) => Enumerable.Range(1, num).Where(i => num % i == 0).ToArray();
    }
}