const detectType = (val: number | string) => {
  if (typeof val === "string") {
    let uppercase = val.toUpperCase();
    return uppercase;
  }
  return val + 7;
};

function provideId(id: string | null){
    if(!id){
        console.log("ID not found");
        return
    }
    return id.toUpperCase();
}

//imp--> typeof string[]='object'
//typeof of an array returns object due to js behaviour

// function printAll(strs: string | string[] | null) {
//     if (strs && typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   }

function printAll(strs: string | string[] | null) {
    if (strs) { //if strs exist
      if (typeof strs === "object") {  //if strs is string[]
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {  //if strs is string
        console.log(strs);
      }
    }
}