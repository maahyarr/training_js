let sabt = confirm("sabt nam?");
if (sabt == true) {
  let firstName = prompt("name");
  if (firstName == false) {
    alert("name ra vard konid");
    let firstName = prompt("name");
  }
  let lastName = prompt("lastname");
  if (lastName == false) {
    alert("lastname ra vard konid");
    let lastName = prompt("lastname");
  }
  let age = Number(prompt("age"));
  if (age == false) {
    alert("age ra vard konid");
    let age = Number(prompt("age"));
  }
  if (age < 18) {
    alert("not alowed");
  }
  let pass = prompt("set a passcode");
  passend = "pass is:".padEnd(15, "?");
  if (pass.length < 6) {
    alert("atleast 6");
    let pass = prompt("set a passcode");
  }
  if (pass == false) {
    alert("pass ra vard konid");
    let pass = Number(prompt("set a passcode"));
  }

  alert(`${firstName} ${lastName} khosh amadid your ${passend}`);
} else {
  console.log("nooooo");
}
