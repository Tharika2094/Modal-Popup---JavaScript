//Variables
const modal=document.querySelector(".modal");
const btn=document.querySelector(".button");
const close=document.querySelector(".close");

btn.addEventListener("click",openModal);
close.addEventListener("clack",closeModal);
modal.addEventListener("click",closeModal);

function openModal(e){
    e.preventDefault();
    modal.style.display="block";
}

function closeModal(){
    modal.style.display="none";
}
