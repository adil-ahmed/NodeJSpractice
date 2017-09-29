let addNumbers = (a,b,c) =>
{
    console.log(a+b+c);
}
let nums = [3,4,5];
addNumbers(...nums); // spread operator

let food = ['Pasta','Sandwitch','Chotpoti'];
let drinks = ['litchi', ...food, 'coke']; //spread operator
console.log(drinks);