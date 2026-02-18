// Use default parameter syntax parameter:=defaultValue if you want to set the default 
// initialized value for the parameter.
// Default parameters are optional.
// To use the default initialized value of a parameter, you omit the argument when 
// calling the function or pass the undefined into the function.


function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

let day = getDay(2019, 2);
console.log(day); // 28

// let day = getDay(undefined, 2);
// console.log(day);