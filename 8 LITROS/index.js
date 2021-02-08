let form = document.getElementById("form");
let btnmodi = document.getElementById("modgas");
let datos1 = document.getElementById("contenedor");
let litrosven = 0;
let mayorVenta =0;
form.btndespacho.addEventListener("click",function(e){
    e.preventDefault;
    rellenartanque();
});

btnmodi.addEventListener("click",function(e){

    if (form.gasolina.disabled== true){
        form.gasolina.disabled = false;

        btnmodi.value = "Guardar Valor ";

    }
    else{
        form.gasolina.disabled = true;
        btnmodi.value = "Editar  Gasolina";
    }
});
function rellenartanque(e){
    if (form.despacho.value ==""){
        alert("debe ingresa primero un valor");
    }
    else{
        if (parseInt(form.gasolina.value) >= parseInt(form.despacho.value)){
            form.gasolina.value = form.gasolina.value- form.despacho.value;
            // vehiculos atendidos 
            let datos = parseInt(datos1.querySelector("#vehiate").textContent);
            datos = datos +1;
            datos1.querySelector("#vehiate").textContent = datos;
            litrosven = litrosven + parseInt(form.despacho.value);
            dinerorecaudado(litrosven);
            mayor(litrosven);
            form.despacho.value= "";
        }
        else{
            alert("No existe la gasolina suficiente");
            form.despacho.value= "";
        }
    }
}

function dinerorecaudado(litros){
    let dinrec;
    dinrec = litros*1.25;
    datos1.querySelector("#dinrec").textContent = dinrec;

}

function mayor(litros){
    if (litros > mayorVenta){
        mayorVenta = litros;
        datos1.querySelector("#maydesx").textContent= mayorVenta;
    }
}