//add,remove,toggle class
let head = document.querySelector("h1");
console.log(head);

head.classList.add("color");
head.classList.remove("border")
head.classList.toggle("background");

//styling
let p=document.querySelector("p");
p.style.color ="red";
p.style.backgroundColor = "green";

//creating element
let ul = document.createElement("ul");
let lii = document.createElement("li");
lii.textContent = " item 1";
let li1 = document.createElement("li");
li1.textContent ="item 2";
ul.appendChild(lii);
ul.appendChild(li1);

document.body.appendChild(ul);
let arr = ["Apple","Banana","Mango"];
arr.forEach((element)=>{
    let lo = document.createElement("li");
    lo.textContent = element;
    ul.appendChild(lo);
});

