const heros:string[]=[];
heros.push("Ironman");

//Another way to define
// const heros:Array<string>=[]

const power:readonly number[]=[];
// power.push(69)-->error


type user={
    name:string,
    email:string
}
const myUsers:user[]=[];
myUsers.push({name:"paul",email:"abc@gmail.com"});


const MLmodels:number[][]=[
    [244,69.96],[11,22,33]
]