let howMstudent = +prompt("chand danesh amoz?");
let students = [];
for (let i = 0; i < howMstudent; i++) {
  let porsesh = prompt(`esm ${i}?`);
  students.push({
    id: i,
    name: porsesh,
  });
}
students.forEach((elem) => {
  let corses = (elem.name = +prompt(`${elem.name} chand dars?`));
  let darsha = [`${elem.name}`];
  for (let i = 0; i < corses; i++) {
    let esmcorse = prompt(`esm dars?`);
    darsha.push({
      name: esmcorse,
    });
  }
  console.log(darsha);
});
