// //1. Tag Selector
 let heading1 = document.getElementsByTagName("h1");
// //HTML Collection Array 
 console.log(heading1[1]);

// //2.Class Selector
 let cl = document.getElementsByClassName("a");
// //HTML Collection Array
 console.log(cl[1]);

// //3. ID Selector
 let idd = document.getElementById("b");
 //it will return single element and the first element
 console.log(idd);

// //4. QuerySelector ( it works on all the three selectors)
 let sel = document.querySelector("#b");
 //it will return single element and the first element
 console.log(sel);

// //5. Query Selector All
 let d = document.querySelectorAll("#b");
 //NodeList Array
 console.log(d);

// // Read Operation 
 let head = document.querySelector("p");
 console.log(head.textContent);  

// //write operation
 let div = document.querySelector("div");
 div.innerHTML = "<p>Hello From bathri</p>";
 div.textContent="<p>Hello From bathri</p>";
 console.log(div.textContent);
 console.log(div.innerHTML);


// //add,remove,toggle class
// let head = document.querySelector("h1");
// console.log(head);

// head.classList.add("color");
// head.classList.remove("border")
// head.classList.toggle("background");

// //styling
// let p=document.querySelector("p");
// p.style.color ="red";
// p.style.backgroundColor = "green";

