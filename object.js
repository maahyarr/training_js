const person = {
  firstName: "Saman",
  lastName: "Khalili",
  age: 20
};
 
console.log(person);
console.log(person['age'])
	
const person2 = {
  firstName: "Saman",
  lastName: "Khalili",
  age: 20
};
 
person2.height = 190;
person2.age++;
console.log(person2);
	
const person3 = {
  firstName: "Saman",
  lastName: "Khalili",
  age: 20,
  fullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
};
 
console.log(person3.fullName());