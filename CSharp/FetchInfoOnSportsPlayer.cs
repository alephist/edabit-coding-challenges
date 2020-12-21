namespace CSharp
{
    // Create a class that takes the following four arguments for a particular football player:
    // name, age, height, weight
    // Also, create three functions for the class that returns the following strings:
    // GetAge() returns "name is age age"
    // GetHeight() returns "name is height cm"
    // GetWeight() returns "name weighs weight kg"
    // https://edabit.com/challenge/ZngT4zDckDugt2JGY

    public class Player
    {
        public string Name { get; }
        public byte Age { get; }
        public byte Height { get; }
        public byte Weight { get; }

        public Player(string name, byte age, byte height, byte weight)
        {
            Name = name;
            Age = age;
            Height = height;
            Weight = weight;
        }
    }

    public class FetchInfoOnSportsPlayer
    {
        public Player Player { get; }

        public FetchInfoOnSportsPlayer(Player player)
        {
            Player = player;
        }

        public string GetAge() => $"{this.Player.Name} is age {this.Player.Age}";

        public string GetHeight() => $"{this.Player.Name} is {this.Player.Height}cm";

        public string GetWeight() => $"{this.Player.Name} weighs {this.Player.Weight}kg";
    }
}