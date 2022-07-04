const button=document.querySelector(".mybtn"),
paragraph=document.querySelector("p");

paragraph.style.display="none";
button.addEventListener("click",()=>{
    paragraph.style.display="block";
})