//Array
let user: (string | number)[] = [1, 2, 3, "Paul"]; //Here string & number can be in any order

//Tuples
let user2: [string, number] = ["Paul", 69]; //Here string & number needs to be in a specific order and must follow a strict sequence

let rgb: [number, number, number] = [255, 22, 21];

type User = [number, string];

const newUser: User = [123, "Abhishek"]; //Must follow User type in order

newUser.push[1] = "call me"; //This is okay
//we are changing abhishek to call me

//Issue with tupple is that we can use array methods like push and pop to insert any type we want, but it shouldnt be allowed
// newUser.push(true);// Looks like it got fixed now


// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');  //-->no error


const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, "The Real Coding God"];

// If you have ever used React before you have worked with tuples more than likely.
// useState returns a tuple of the value and a setter function.
// const [firstName, setFirstName] = useState('Dylan') is a common example.
// Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.

export {};
