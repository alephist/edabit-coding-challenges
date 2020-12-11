// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
// The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r)
// which give both respective areas and perimeter (circumference).
// https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

module.exports = Circle;
