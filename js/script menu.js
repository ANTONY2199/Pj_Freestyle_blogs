var active = false;//se crea la variable active que lleva como valor global false
function navEffect(){//se crea la funcion 
    if(!active) {//if recibe como parametro la negacion de active
        active=true;//si active es false, se le otorga verdad
        document.getElementById('nav_mobile').style.display = "block";//
    }else{
        document.getElementById('nav_mobile').style.display = "none";
        active=false;
    }
}
