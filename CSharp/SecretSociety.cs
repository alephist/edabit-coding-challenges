using System.Linq;

namespace CSharp
{
    // A group of friends have decided to start a secret society. 
    // The name will be the first letter of each of their names, sorted in alphabetical order.
    // Create a function that takes in an array of names and returns the name of the secret society.
    // https://edabit.com/challenge/zQm9YZTTFPhNtYjDr
    public static class SecretSociety
    {
        public static string SocietyName(string[] friends) =>
            new string(friends.Select(name => name[0]).OrderBy(c => c).ToArray());
    }
}