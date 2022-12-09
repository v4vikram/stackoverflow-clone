// let user = {
//     name: "vikram"
// }
// user.__proto__.len = function(){
//     console.log(this.name.length);
// }

let arrayIntegers = [1, 2, 3, 4, 5];
// console.log(arrayIntegers.length)

// let selectVal = arrayIntegers.splice(0, 3, 'bb');
// console.log(arrayIntegers)

const multiArgFunction = (a) => {
    return (b)=>{
            return (c)=>{
                console.log(a+b+c)
            }
    }
};

if(Number.isNaN == 1){
    console.log("number")
}
else{
    console.log("not a number")
}
// (function(){
//   console.log("IIFE")  
// }())
// setTimeout(()=>{console.log("hello")},1000)
// setInterval(()=>{console.log("hello")},1000)

//multiArgFunction(1)(2)(3); // returns the number 6