//Bai1
const p=document.querySelector("#text");
p.classList.add("heading");
const id=document.querySelector("#text")
id.textContent="Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";
id.classList.add("heading");
//Bai2
// const id=document.querySelector("#bai2");
// for(let i=0;i<id.length;i++){
//     id.classList.add("bai2")
// }
//Bai3
//1
const ul=document.querySelector("#list");
ul.innerHTML=ul.innerHTML+"<li> Item 8</li>";
ul.innerHTML=ul.innerHTML+"<li> Item 9</li>";
ul.innerHTML=ul.innerHTML+"<li> Item 10</li>";
//2
const li1=document.querySelector("#li1");
li1.classList.add("li-1")
//3
const li3=document.querySelector("#li3");
li1.classList.add("li-3");
//4
const li4=document.querySelector("#li4");
li4.remove();
//5
const li6=document.createElement("li");
li6.innerText="Hello";
const li5=document.querySelector('#li5');
document.body.insertBefore(li6,li5)



