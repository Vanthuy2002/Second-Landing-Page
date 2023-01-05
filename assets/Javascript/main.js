//Đóng/mở menu reponsive

let Btns = document.querySelector(".nav__icon");
let menuOpen = document.querySelector(".menu__reponsive");
let BtnClose = document.querySelector(".menu__reponsive-close");

Btns.onclick = function(){
    menuOpen.style.display = "block";
}

BtnClose.onclick = function(){
    menuOpen.style.display = "none";
}

//click vào vùng ngoài menu để đóng lại
window.onclick = function(e){
    if(e.target == menuOpen){
        menuOpen.style.display = "none";
    }
}

