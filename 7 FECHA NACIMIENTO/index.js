let form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    var f1 = new Date(1900, 01, 01)
    const fecha = new Date(form.fechanac.value);
    if ((fecha <= f1)|| (fecha > Date.now())){
        alert("La fecha se encuentra fuera de un rango válido")
        return;
    }
    edad(fecha);
});


function edad(fecha){
    const nac = new Date(fecha);
    const act =  Date.now();
    let dif = act - nac;
    let seg = dif/1000;
    let añosdeci = ((seg/(3600*24*365)));
    let años = parseInt(añosdeci);
     seg = añosdeci -años;
    let mesdeci = seg*12;
    let mes = parseInt(mesdeci);
    seg = mesdeci-mes;
    let dia = parseInt(seg*30);
    document.getElementById("dia").textContent = dia;
    document.getElementById("mes").textContent = mes;
    document.getElementById("año").textContent = años;

}
