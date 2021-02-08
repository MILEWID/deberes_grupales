// *	Una compañía dedicada al alquiler de automóviles cobra un monto fijo de $300000 para los primeros 300 km de recorrido. Para más de 300 km y hasta 1000 km, cobra un monto adicional de $ 15.000 por cada kilómetro en exceso sobre 300. Para más de 1000 km cobra un monto adicional de $ 10.000 por cada kilómetro en exceso sobre 1000. Los precios ya incluyen el 20% del impuesto general a las ventas, IVA. Diseñe un programa que determine el monto a pagar por el alquiler de un vehículo y el monto incluido del impuesto. 
let form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let kil = parseInt(form.kilo.value);
    if (isNaN(kil)){
        alert("Error los parámetros ingresados no son numéricos");
        return;
    }
    if ((kil <= 0) || (kil > 20000) ){
        alert("los valores deben estar en el rango de 0 a 20000");
        return;
    }
    form.querySelector("#monto").textContent = montopagarsinimpo(kil);
    form.querySelector("#montoi").textContent = montopagarconimpo(kil);
});

function montopagarconimpo(kil){
    let mont;
    if (kil <= 300){
        mont =300000;
    }
    else if(kil <=1000){
        mont = 300000 + ((kil - 300)*15000);
    }
    else if(kil >1000){
        mont = 300000 + ((kil - 1000)*10000);
    }
    return mont;
}

function montopagarsinimpo(kil){
   let mont = montopagarconimpo(kil)
    mont =   (mont/(1.20)).toFixed(2);
    return mont;
}