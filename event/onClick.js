// funcion que cambiara el contenido
function modifyText(event) {
    console.log('====================================');
    console.log(event);
    console.log('====================================');
  
    let t2 = document.getElementById("t2");
    let valueT2 = t2.firstChild.nodeValue;
    if (valueT2 === 'Dos') {
        t2.firstChild.nodeValue = "Tres";
        
    } else {
        t2.firstChild.nodeValue = "Dos";
    }
}


