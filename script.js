const menubtn = document.querySelector('.hamburger')
const menu = document.querySelector('ul')


let menuOn = false;
const showMenu = () =>{
    console.log("working");
    // menu.className.toggle('showw')
    if(menuOn==false){
        menu.style.opacity=1
        menuOn=true
    }
    else{
        menu.style.opacity=0
        menuOn = false
    }
}

menubtn.addEventListener('click', showMenu)