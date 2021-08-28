"""
Shapes With N Sides

Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"

https://edabit.com/challenge/8qFxzmHjErwm3zmkG
"""


def n_sided_shape(n: int) -> str:
    shape_type = {
        1: 'circle',
        2: 'semi-circle',
        3: 'triangle',
        4: 'square',
        5: 'pentagon',
        6: 'hexagon',
        7: 'heptagon',
        8: 'octagon',
        9: 'nonagon',
        10: 'decagon'
    }

    return shape_type.get(n)
