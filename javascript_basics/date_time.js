let date_time = new Date()
console.log(date_time);
// console.log(date_time.toLocaleString());
// console.log(date_time.toDateString());
// console.log(date_time.toTimeString());
// console.log(date_time.toLocaleDateString());
let d = {
    0 : "Sunday",
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday",
}
console.log(date_time.getDate());
console.log(date_time.getMonth()+1);
console.log(date_time.getFullYear());
console.log(d[date_time.getDay()]);