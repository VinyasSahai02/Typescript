let greetings:string="Sahai";
// greetings=4 --> not allowed as type is string

let num=7;

greetings.toUpperCase();
greetings.toLowerCase();
//many methods exist for greetings.

console.log(greetings);

export {};


// When creating a variable, there are two main ways TypeScript assigns a type:Explicit and Implicit
// let firstName: string = "Dylan"; (explicit-->type is wtitten out)
// let firstName = "Dylan"; (implicit-->ts will guess the type based on assigned value)