//Partial function add returns a function with argument b, and this function creates a closure with the parameter
// 'a' of the outer function
function add(a){
    return function(b){
        return a + b;
    }
}

function checkPartialFunction(){
var add10 = add(10)
console.log(add10(5));
}