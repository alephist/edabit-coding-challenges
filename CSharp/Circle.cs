using System;

namespace CSharp
{
    // Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
    // The circles constructed must have two getters GetArea() (PIr^2) and GetPerimeter() (2PI*r) 
    // which give both respective areas and perimeter (circumference).
    // https://edabit.com/challenge/kpReAapuDjgX2b4em
    public class Circle
    {
        private readonly double _radius;

        public Circle(double radius)
        {
            _radius = radius;
        }

        public double GetArea() => Math.PI * Math.Pow(_radius, 2);

        public double GetPerimeter() => 2 * Math.PI * _radius;
    }
}