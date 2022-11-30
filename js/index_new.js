//acciones al evento onclick icono hamburguesa 
function openMenu(){
document.getElementById("mainMenu").style.width="470px";
cument.getElementById("mainMenu").style.display="flex";
document.getElementById(mainMenu).style.height="1000px";
document.getElementById(openmenu).style.display="none";
}
//Acciones al evento onclick en icono de cerrar X
function closeNav(){
    document.getElementById(mainMenu).style.width="0px";
    document.getElementById(mainMenu).style.transition="0.9s all";
    window.location.reload()// emular tecla F5
}
