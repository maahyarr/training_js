const mahyar = {
  firstName: "mahyar",
  lastName: "amini",
  age: 28,
  jobTitle: "coder",
  bio: function () {
    return `he is ${this.firstName} ${this.lastName} his age is ${
      this.age * 365
    } days and he is a ${this.jobTitle}`;
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(mahyar.bio());
console.log(mahyar.fullName());
