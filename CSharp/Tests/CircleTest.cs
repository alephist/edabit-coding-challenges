using System;
using Xunit;

namespace CSharp.Tests
{
    public class CircleTest
    {
        [Theory]
        [InlineData(20, 1256.63706)]
        [InlineData(2, 12.56637)]
        [InlineData(4.4, 60.82123)]
        public void GetArea_DoubleRadiusValue_ReturnAreaOfCircle(double radius, double expected)
        {
            var circle = GenerateCircle(radius);

            var actual = Round(circle.GetArea());

            Assert.Equal(expected, actual);
        }

        [Theory]
        [InlineData(20, 125.66371)]
        [InlineData(2, 12.56637)]
        [InlineData(4.4, 27.64602)]
        public void GetPerimeter_DoubleRadiusValue_ReturnCircumference(double radius, double expected)
        {
            var circle = GenerateCircle(radius);

            var actual = Round(circle.GetPerimeter());

            Assert.Equal(expected, actual);
        }

        public Circle GenerateCircle(double radius) => new Circle(radius);

        private double Round(double number)
        {
            double factor = Math.Pow(10, 5);

            return Math.Round(number * factor) / factor;
        }
    }
}