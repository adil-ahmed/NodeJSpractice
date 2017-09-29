class Person
{
    constructor(name,age,weight)
    {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    personAge()
    {
        console.log(`Age is ${this.age}`);
    }
    personName()
    {
        console.log(`Name is ${this.name}`);
    }
    personWeight()
    {
        console.log(`Weight is ${this.weight}`);
    }
}

class Programmer extends Person
{
    constructor(name,age,weight,language)
    {
        super(name,age,weight);
        this.language = language;    
        
    }
    personaLanguage()
    {
        console.log(`Language is ${this.language}`);

    }
}

let Sultan = new Person('Sultan',30,70);
Sultan.personName();
Sultan.personWeight();
Sultan.personAge();

console.log(`*******************************************************************`);
let Jomidar = new Programmer('Jomidar',35,80,'Java');
Jomidar.personName();
Jomidar.personAge();
Jomidar.personWeight();
Jomidar.personaLanguage();
