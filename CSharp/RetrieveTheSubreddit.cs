namespace CSharp
{
    // Create a function to extract the name of the subreddit from its URL.
    // https://edabit.com/challenge/qvo2Ae8WdRQfCwaQk
    public static class RetrieveTheSubreddit
    {
        public static string SubReddit(string link)
        {
            var connUri = link.Replace("https://", string.Empty);

            return connUri.Split('/')[2];
        }
    }
}