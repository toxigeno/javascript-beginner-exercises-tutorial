function getColor(colorNumber) {
    //make sure parameter is a number and not a string by converting the value to int:

    switch (colorNumber) {
        case 1:
            return "red";
        case 2:
            return "yellow";
        case 3:
            return "blue";
        case 4:
            return "green";

    }
    return "black";
}

function getAllStudentColors() {

    //your loop here
    for (var i = 1; i < 11; i++) {
        var colorAleatorio = Math.floor(Math.random() * 4 + 1);
        console.log(i+" "+getColor(colorAleatorio));
    };

}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();