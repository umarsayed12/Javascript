const Khalifa = ["Abu Baqr Siddique","Umar ibn al Khattab","Usman ibn al Affan","Ali ibn abi Talib"]

for (const iterator of Khalifa) {
    //console.log(iterator);
}

for (const key in Khalifa) {
    //console.log(Khalifa[key]);
}

Khalifa.forEach((item) => {
    //console.log(item);
});

const MyArr = [
    {
        Name : "Umar",
        Branch : "IT",
        Age : 20
    },
    {
        Name : "Avaish",
        Branch : "CSAI",
        Age : 20
    },
    {
        Name : "Faisal",
        Branch : "CSE",
        Age : 21
    },
]

MyArr.forEach( (item) => {
    console.log(item.Age);
} )