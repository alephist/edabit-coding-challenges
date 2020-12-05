using System.Linq;

namespace CSharp
{
    // Create a function that takes an array of hurdle heights and a jumper's jump height, 
    // and determine whether or not the hurdler can clear all the hurdles. 
    // A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
    // https://edabit.com/challenge/78LSJFf47j3omQgr2
    public static class HurdleJump
    {
        public static bool Jump(int[] hurdles, int jumpHeight) => hurdles.Length == 0 ? true : jumpHeight >= hurdles.Max();
    }
}