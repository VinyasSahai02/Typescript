interface User{
    readonly _id:number,
    email:string,
    userId:number,
    googleId?:number,
    // startTrial:()=>string//One way of declaring method
    startTrial():string,
    getCoupon(couponName:string, value:number):number
}

const paul:User={_id:69,email:"abc@.com",userId:69,
    startTrial(){
        return "Trial started"
    },
    getCoupon(coupon="Discount", val=10) {
        return 10
    },
    githubId:96
}

paul.email="paul@.com"

//Reopening of interface
//imp--> type cannot be changed after declaration but interfaces can be
interface User{
    githubId:number
}

// Interfaces are similar to type aliases, except they only apply to object types.
// type CarModel = string;
// interface Car  {
//   year:  number;
//   type: string;
//   model: CarModel;
// };



//Inheritance
interface admin extends User{
    adminRole: "Head" | "Editor" | "Design"
}

const paulAdmin:admin={_id:69,email:"abc@.com",userId:69,
    startTrial(){
        return "Trial started"
    },
    getCoupon(coupon="Discount", val=10) {
        return 10
    },
    githubId:96,
    adminRole:"Head",
}


export{}