namespace CSharp
{
    // Create a function which returns the number of true values there are in an array.
    // https://edabit.com/challenge/afStrS4BkCKums62B
    public static class HowMuchIsTrue
    {
        public static int CountTrue(bool[] arr)
        {
            int count = 0;

            foreach (var item in arr)
            {
                if (item == true)
                {
                    count++;
                }
            }

            return count;
        }
    }
}