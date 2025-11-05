const btn = document.querySelector("button");
console.log(btn);

//btn.addEventListener("click",(event)=>{
//  btn.innerText="goooooo"

//})

//btn.onclick = function () {
//return console.log("ddddddd");
//};

btn.addEventListener("click", () => {
  const box = document.querySelector(".box");
  const color = document.querySelector(".box").style.backgroundColor;
  if (color === "black") {
    document.querySelector(".box").style.backgroundColor= "red";
  }
  console.log(color);
});
