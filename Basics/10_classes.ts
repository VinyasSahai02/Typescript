//Class Introduction

//  class User{
//     email:string
//     name:string
//     readonly city:string="Delhi"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }


//Private & public class

// class User{
//     public email:string;
//     private name:string;
//     //Or you can declare it like this #name ---> Javacript exclusive command but not for typescript
//     readonly city:string="Delhi";
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }
// user.name--> not accessible as set as private


class User{
    readonly city:string="Delhi"; //we are declaring value of city here because city does not exist in constructor
    constructor(public email:string,private name:string){
       
    }
}
//this is the same as above code

const Paul=new User("Ap@.com","Paul");
// Paul.city="Kerela"--> Only readonly

export{}