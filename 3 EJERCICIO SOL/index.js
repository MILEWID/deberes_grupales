function tomardatos(){
    let altura=0;
    let largo=0;
    altura= document.getElementById("altura").value;
    largo = document.getElementById("largo").value;
    if ((altura =="") || (largo =="")){
        alert("Primero debe ingresar valores");
        return;
    }
    if ((altura <= 0 ) || (largo <= 0)){
        alert("Los valores no deben ser negativos o nulos");
        document.getElementById("altura").value = "";
        document.getElementById("largo").value ="";
        return;
    }
    calcularangulo(altura,largo);
    document.getElementById('resultado_general').classList.add('active')
}

function calcularangulo(alt,lar){
    let grad =0;
    grad = Math.atan(alt/lar)*180;
    document.getElementById("resultado").textContent = Math.trunc(grad)+"°";
    gradminsec(grad);
}

function gradminsec(grad){
    let grad2 = Math.trunc(grad);
    let min = (grad %1)*60;
    let min2 = Math.trunc(min);
    let sec = Math.round((min %1)*60);
    document.getElementById("g").textContent = grad2+"°";
    document.getElementById("m").textContent = min2+"\"";
    document.getElementById("s").textContent = sec+"'";
}

function ocultarResultado(){
    document.getElementById('resultado_general').classList.remove('active')
}