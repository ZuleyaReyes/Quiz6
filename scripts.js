function contarParrafos() {
    const parrafos = document.querySelectorAll("p:not(#resultado)"); 
    document.getElementById("resultado").innerText = `Total de párrafos: ${parrafos.length}`;
}
function contarItemsLista() {
    const totalItems = document.querySelectorAll("#lista-menu li").length;
    document.getElementById("resultado").innerText = `Total de ítems en la lista: ${totalItems}`;
}

function contarDivsNoticia() {
    const totalNoticias = document.getElementsByClassName("noticia").length;
    document.getElementById("resultado").innerText = `Total de noticias: ${totalNoticias}`;
}


