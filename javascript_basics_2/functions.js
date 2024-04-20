myfirstfunction(23)  // Will not throw any error
function myfirstfunction(name){
    console.log(`Hello ${name}`);
}


console.log(addnum(2,3)); //Will give error as "Cannot access 'addnum'  before initialization"
const addnum = function(a,b){
    return a+b
}