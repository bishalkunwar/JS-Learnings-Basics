const areaOfTraingle = () => {
    const side1 = 2; //prompt("Enter value for side1");
    const side2 = 3; //prompt("Enter value for side2");
    const side3 = 4; //prompt("Enter value for side3");

    const perimeter = side1 + side2 + side3 / 2;
    const area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
    return area;
};

console.log("The area of traingle with the given sides is: " + areaOfTraingle());