// console.log("Hello Typescript");
// const myname: string = "Krish";
// const myage: number = 12;


// function add(x: number, y: number):number{
//     return x+y;
// }

// const sum = (x: number, y: number): number => {
//     return x+y;
// };

// let output = add(1,2);

//Custom types
//inheritance
type Animal = {
    noOfLegs: number;
    hasWings:boolean;
};

type Dog = {
    food:string;
};
//Composition
const myDog: Dog | Animal = {
    food:"pedigree",
}

