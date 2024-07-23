// const user={
//     name:"Paul",
//     email:"abc@gamil.com",
//     isActive:true
// }


// function createUser({name:string,isPaid:boolean}){}
// let newUser={
//     name:"Paul",
//     email:"abc@gamil.com",
//     isPaid:false
// }
// createUser(newUser);


// function createCourse():{name:string,price:number}{
//     return {name:'react.js',price:499}
// }


//Type Alias
// type User={
//     name:string;
//     email:string;
//     isActive:boolean
// }

// function createUser(user:User):User{
//     return {name:"",
//         email:"",
//         isActive:false}
// }

// createUser({name:"Paul",email:"abc@gmail.com",isActive:true});


//lets say we are storing our user in mongoDB 
//_id will be created by mongoDB automatically
//but we dont want anyone to change _id
//so we mark it as readonly using the keyword
type User={
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    cardDetails?:number //? makes this optional
    //see myUser it doesnt have cardDetails but we dont have an error
}

let myUser:User={
    _id:"",
    name:"abc",
    email:"abc@gmail.com",
    isActive:true
}

myUser.name="xyz";
// myUser._id='s'--->Cannot be done as readonly


type cardNumber={
    cardnumber:string
}
type cardDate={
    cardDate:string
}

//Concating types
type cardDetails=cardNumber & cardDate &{
    cvv:number;
}

export{}