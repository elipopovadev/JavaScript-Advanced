function solve(input) {
    let result = input.map(([width, height]) => {
      return rectangle = {
            width,
            height,
            area: () => width * height,
            compareTo(other) {
                return (other.area() - this.area()) || (other.width - this.width);
            }
        }
    }).sort((a, b) => a.compareTo(b));

    return (result);
};

solve([[10,5], [3,20], [5,12]]);
