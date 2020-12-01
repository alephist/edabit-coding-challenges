namespace CSharp
{
    // Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).
    // https://edabit.com/challenge/CtRJzrY2aPgoqSFAr
    public static class BrokenBridge
    {
        public static bool IsSafeBridge(string str) => !str.Contains(" ");
    }
}