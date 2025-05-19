//Variables
const modelContect=document.querySelector(".modal-content")
const modal=document.querySelector(".modal");
const btn=document.querySelector(".button");
const close=document.querySelector(".close");

btn.addEventListener("click",openModal);
close.addEventListener("click",closeModal);
modal.addEventListener("click",closeModal);

function openModal(e){
    e.preventDefault();
    modal.style.display="block";
}

function closeModal(){
    modelContect.classList.add("slide-up");
    setTimeout(()=>{
        modal.style.display="none";
        modelContect.classList.remove("slide-up")
    },500);
}
