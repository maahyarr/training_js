const air = document.querySelector("#test");
console.log(air);
const items = [
  {
    imgSrc: "./img/New folder/n1.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n2.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n3.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n4.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n5.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n6.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n7.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n8.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n9.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n10.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n11.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n12.png",
    Text: "Apple Watch Ultra 2 ",
  },
  {
    imgSrc: "./img/New folder/n13.png",
    Text: "Apple Watch Ultra 2 ",
  },
];

items.forEach((elem) => {
  const airr = document.createElement("div");
  const child1 = document.createElement("div");
  const img = document.createElement("img");
  img.src = elem.imgSrc;
  
  const child2 = document.createElement("div");
  const span = document.createElement("span")
  span.innerHTML=elem.Text
  child1.append(img)
  child2.append(span)
  airr.append(child1);
  airr.append(child2);
  air.appendChild(airr);
});
const sec=document.querySelector(".sec")
console.log(sec);
const child1=document.createElement("div")
const div11=document.createElement("div")
const div111=document.createElement("div")
const div112=document.createElement("div")
div11.append(div111,div112)
const div12=document.createElement("div")

child1.append(div11,div12)

const child2=document.createElement("div")
const div21=document.createElement("div")
const div211=document.createElement("div")
const div212=document.createElement("div")
div21.append(div211,div212)
const div22=document.createElement("div")

child2.append(div21,div22)
const child3=document.createElement("div")
const div31=document.createElement("div")
const div311=document.createElement("div")
const div312=document.createElement("div")
div31.append(div311,div312)
const div32=document.createElement("div")

child3.append(div31,div32)
sec.append(child1,child2,child3)