let formulario = document.getElementById("formulario");
formulario.addEventListener("submit",function (e){
    //*Para prevenir que se reinicie (evento por defecto)
    e.preventDefault();
    obtenerdatos();
});

function obtenerdatos(){
    let tiempo = parseFloat(formulario.tiempo.value);
    if (tiempo < 0){
        alert("El tiempo es negativo");
        formulario.reset(); 
        return;
    }
    if(tiempo == "" || isNaN(tiempo)){
        alert("El tiempo no es valido ");
        formulario.reset(); 
        return;
    }
    calcularaltura(tiempo);
}

function  calcularaltura(t){
    let h=0;
    const g = 9.8;
    h= (g*(Math.pow(t,2)))/2;
    document.getElementById("result").textContent = h.toFixed(2);
}