

// function sum (a){
//     return function (b) {
//         // if(b){
//             return sum(a+b);
//         }
//         return a;
//     }
// }

// // let x = cur(sum);
// console.log(sum(1)(2)(3)());

function add(x){
    let sum = x;
    function resultFn(y){
        sum += y;
        return resultFn;
    }
    resultFn.valueOf = function(){
            return sum;
        };
    return resultFn;
}

console.log(add(3)(4)(5).valueOf())