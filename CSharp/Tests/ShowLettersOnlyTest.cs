using Xunit;

namespace CSharp.Tests
{
    public class ShowLettersOnlyTest
    {
        [Theory]
        [InlineData(",1|2)\")A^1<[_)?^\"]l[a`3+%!d@8-0_0d.*}i@&n?=", "Aladdin")]
        [InlineData("^U)6$22>8p).", "Up")]
        [InlineData("I5n!449+c@e*}@@1]p{2@`,~t:i0o%n<3%8", "Inception")]
        [InlineData("!)\"P[s9)\"69}yc3+?1]+33>3ho", "Psycho")]
        [InlineData(":~;G{o}o{+524<df~:>}e24{l8:_l]a:?@]%s7", "Goodfellas")]
        [InlineData("&&S~]@8>1-0!h#r),80<_>!}|e>_k:", "Shrek")]
        [InlineData(")^/|,!!09]=/1<G2?`=[l{a}d9]^i7a0|t6_o2*r", "Gladiator")]
        [InlineData("]8;]V9e{=0r!.5t>i<^_g\"4o\"5~", "Vertigo")]
        [InlineData("%%)?\"?B#>/_4a#,;t8|m8675a(n", "Batman")]
        [InlineData("97H^)~a8567ll*o?\"6%)w63e37e<n?@=", "Halloween")]
        public void LettersOnly_StringInputWithMixedCharacters_ReturnStringWithoutNonLetters(string str, string expected)
        {
            var actual = ShowLettersOnly.LettersOnly(str);

            Assert.Equal(expected, actual);
        }
    }
}