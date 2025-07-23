function abre_pag(pag){
    hide_all();
    document.getElementById("contenedor").innerHTML = '<object id="htmldiv" type="text/html" data="' + pag + '" style="width:100%; height:100%; display:block;"></object>';
}

function hide_all(){
    return;
    menu1 = parent.document.getElementById('menu1');
    menu2 = parent.document.getElementById('menu2');
    modal1 = parent.document.getElementById('modal1');
    modal2 = parent.document.getElementById('modal2');
    menu1.style.display = "none";
    menu2.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
}