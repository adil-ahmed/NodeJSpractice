//You can't use arguments keyword and this keyword when using arrow function..
//But using normal function we can use both argument and this keyword

var user = {
    name : 'Adil',
    sayHi : () => 
    {
        //console.log(`I am ${this.name}`);
        console.log(`I am ${user.name}`);
    },
    sayHiAlt ()
    {
        console.log(`I am ${this.name}`);
        console.log(arguments);
    }
};
//user.sayHi();
user.sayHiAlt(1,2,3);