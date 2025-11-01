/*
function logFullName(firstname, lastname = "lastname") {
  console.log(`${firstname} ${lastname}`);
}

logFullName("mahyar");


const multi = function(a="2",b="4") {
    console.log(a*b);
    
    
}
multi(3 , 4)

const fullName = (firstName,lastName)=> console.log(`${firstName}  ${lastName}`);

fullName(firstName=prompt("name?"),lastName=prompt("lname?"))


const ageInDays = age => console.log(age*365);

ageInDays(age=prompt("enter ur age"))

const greet=(namee="name") => console.log(`hello ${namee}`);

greet(namee=prompt("name?"))
greet()
*/
const canSign= (age) => {
    if (age<18) {
        console.log("not allowed"); 
    }
    if (age>=18) {
        console.log("allowed"); 
    }

}    
canSign(age=Number(prompt("age?")))