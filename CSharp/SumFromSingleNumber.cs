namespace CSharp
{
    // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number 
    // you passed to the function. For example, if the input is 4 then your function 
    // should return 10 because 1 + 2 + 3 + 4 = 10.
    // https://edabit.com/challenge/PquhuBy8gNzRbSfjE
    public static class SumFromSingleNumber
    {
        public static int AddUp(int num)
        {
            var total = 0;

            for (int i = 1; i <= num; i++)
            {
                total += i;
            }

            return total;
        }
    }
}