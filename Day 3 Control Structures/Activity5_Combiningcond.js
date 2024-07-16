let year =2100;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("yes it is leap year");  
     } else {
        console.log("no it is leap year");
    }

