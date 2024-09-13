// Basic code - working
// let year = +prompt("Enter a year");
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             alert(`${year} is a leap year`);
//         } else {
//             alert(`${year} is NOT a leap year`);
//         }
//     } else {
//         alert(`${year} is a leap year`);
//     }
// } else {
//     alert(`${year} is NOT a leap year`);
// }

//Clean code
let year = +prompt("Enter a year");
let isLeapYear = false;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}
if (isLeapYear) {
    alert(`${year} is leap year`);
} else {
    alert(`${year} is Not leap year`);
}