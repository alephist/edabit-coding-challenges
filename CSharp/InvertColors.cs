using System.Linq;

namespace CSharp
{
    // Create a function that inverts the rgb values of a given tuple.
    // https://edabit.com/challenge/5oyDEx24RC8qJxDRk
    public static class InvertColors
    {
        public static byte[] ColorInvert(byte[] rgb) => rgb.Select(c => (byte)(255 - c)).ToArray();
    }
}