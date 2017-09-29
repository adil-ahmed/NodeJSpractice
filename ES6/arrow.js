/// normal function
function circleArea1(r)
{
    const PI = 3.14;
    return PI*r*r;
}

///arrow function
let circleArea2 = (r) =>
{
    const PI = 3.14;
    return PI*r*r;
}
///single line statement with arrow statement

let circleArea3 = r => 3.14*r*r;

console.log(circleArea1(7));
console.log(circleArea2(8));
console.log(circleArea3(9));
