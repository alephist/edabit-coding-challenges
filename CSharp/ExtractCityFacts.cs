namespace CSharp
{
    // Create a function that takes an object as an argument and returns a string with facts about the city. 
    // The city facts will need to be extracted from the object's three properties: name, population, continent
    // The string should have the following format: X has a population of Y and is situated in Z 
    // (where X is the city name, Y is the population and Z is the continent the city is situated in).
    public class City
    {
        public string Name { get; }
        public string Population { get; }
        public string Continent { get; }

        public City(string name, string population, string continent)
        {
            Name = name;
            Population = population;
            Continent = continent;
        }
    }

    public static class ExtractCityFacts
    {
        public static string CityFacts(City city) =>
            $"{city.Name} has a population of {city.Population} and is situated in {city.Continent}";
    }
}