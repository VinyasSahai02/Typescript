function addTwo(num:number):number{
    return num +2;
    // return "string"---> not possible 
}

function getUpper(val:string){
    return val.toUpperCase();
}

function signUp(name:string,email:string,isPaid:boolean){}

let login=(name:string,email:string,isPaid:boolean=false)=>{}

addTwo(5);

getUpper("Paul");

signUp("Paul","abc@gmail.com",true);

login("Paul","abc@gmail.com");


// This is a special case, we cant return two different types, it needs extra learning
// function getValue(myVal:number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }

const getHello=(s:string):string=>{
    return "Hello";
}

const heros=["Thor","Ironman","Ironman"]
// const heros2 = [1,2,3];
heros.map((hero):string=>{
    return `Hero is ${hero}`;
})
//if we take heros2 then it shows error as we have defined return type as string
//if the func is like this-
// heros.map((hero) => {
//   return 2;
// });
//then ts auto changes the parameter to number


function consoleError(errMsg:string):void{
    console.log(errMsg);
}
//void is used to indicate a func doesnt return any value

function handleError(errMsg:string):never{
    throw new Error(errMsg);
}
//handleError handles the error and doesnt return anything so it is type never
//never type represents values which are never observed
//in return type it means that func throws an exception or terminates execution of the program
//never effectively throws an error whenever it is defined

export{};