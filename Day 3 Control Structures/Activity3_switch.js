//Task 4
switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
    break;

    case 1:
        day = "Monday";
    break;

    case 2:
        day = "Tuesday";
    break;
    
    case 3:
        day = "Wednesday";
    break;

    case 4:
        day = "Thursday";
    break;

    case 5:
        day = "Friday";
    break;

    case 6:
        day = "Saturday";
    break;

    default:
        day = "Invalid day";
}

console.log(day);

//Task 5
let grade = "A" ;
switch (grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Satisfactory");
        break;
    case "D":
        console.log("Needs Improvement");
        break;
    case "F":
        console.log("Fails the Exam");
    default:
        console.log("Invalid Grade");
}

