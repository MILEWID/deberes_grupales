const prec = 11;
let formulario = document.getElementById("form");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let docenas = formulario.docenas.value;
    if(docenas == ""){
        alert("debe ingresar valores primero ")
        document.getElementById("compra").textContent = "0";
        document.getElementById("desc").textContent  = "0";
        document.getElementById("tot").textContent = "0";
        document.getElementById("uni").textContent ="0";
        return;
    }
    document.getElementById("compra").textContent = montocompra(docenas);
    document.getElementById("desc").textContent  = montodescuento(docenas);
    document.getElementById("tot").textContent = total(docenas);
    document.getElementById("uni").textContent= unidadesgratis(docenas);
});
function montocompra(uni) {
    let mont = uni * prec;
    return mont;
}
function montodescuento(uni) {
    let desc;
    if (uni <= 3) {
        desc = montocompra(uni) * (10 / 100);
    }
    if (uni > 3) {
        desc = montocompra(uni) * (15 / 100);
    }
    return desc.toFixed(2);
}
function total(uni) {
    let tot = montocompra(uni) - montodescuento(uni);
    return tot;
}

function unidadesgratis(uni) {
    let reg;
    if (uni > 3) {
        reg = uni -3;
    }
    return reg;
}
