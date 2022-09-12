const container = document.querySelector('.container'),
        signUp = document.querySelector(".signup-text"),
        loign = document.querySelector(".login-text")


signUp.addEventListener("click", ()=>{
    container.classList.add("active");
});
loign.addEventListener("click", ()=>{
    container.classList.remove("active");
});