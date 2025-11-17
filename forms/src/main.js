
function error(text) {
  
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML=text
   ul.append(li)
}
let form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("ul").innerHTML=""
  let elements = e.target.elements;
  let email = elements.email.value;
  let pass = elements.password.value;
  if (!email || !pass) {

    error("por konid")
  }else if(pass.length<8){
error("pass kotahe")
  }
});
