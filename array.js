// array.fill(value, start, end)
//

const names = ["Ali", "Amin", "Sara"];

names.fill("Mamad");
names.fill("Kamran", 1);
names.fill("Hamid", 0, 1);
const names2 = ["Ali", "Amin", "Sara"];

names.includes("Mamad"); // ??
names.includes("Ali"); // ??
names.includes("Ali", 2); // ?

const names3 = ["Ali", "Amin", "Sara"];

names.indexOf("Mamad"); // ??
names.indexOf("Ali"); // ??
names.indexOf("Ali", 2); // ?

const names4 = ["Ali", "Amin", "Sara", ["Kamran", "Hasan"]];

const flattenNames = names4.flat();

// array.join(separator)

const names5 = ["Ali", "Amin", "Sara"];

const namesString = names5.join();

const namesStringWithAnd = names5.join(" and ");

const names6 = ["Ali", "Amin", "Sara"];

names6.reverse();

const names7 = ["Ali", "Amin", "Sara"];

const moreNames = names7.push("Ahmad", "Karim");

const names8 = ["Ali", "Amin", "Sara"];

const moreNames2 = names8.unshift("Ahmad", "Karim");

const names9 = ["Ali", "Amin", "Sara"];

const first = names9.shift();

const names10 = ["Ali", "Amin", "Sara"];

const last = names10.pop();

// array.slice(start, end)

const names11 = ["Ali", "Amin", "Sara", "Davood", "Karim"];

const firstThreeNames = names11.slice(0, 3);
const lastThreeNames = names11.slice(-3);

// array.splice(index, howmany, item1, ....., itemX)

const names12 = ["Ali", "Amin", "Sara"];

const moreNamesAfterTow = names12.splice(2, 0, "Javid", "Saman");
const removedNames = names12.splice(0, 2);

const words = Array.from("Hello");

const isItAnArray = Array.isArray([1, 2, 3]); // true

const isItAnArray2 = Array.isArray("I am a string"); // false



const names21 = ["Ali", "Amin", "Sara", "Davood", "Karim"];
names21.forEach( (item) => {
    console.log(item);
    
}


)
