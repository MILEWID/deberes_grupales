let form = document.getElementById("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    let dec= parseInt(form.decimal.value);
    if (isNaN(dec)){
        form.decimal.value="";
        alert("debe ingresar valores numéricos");
        return;
    }
    form.binario.value =   decabin(dec);
});

function decabin(dec){
    let divisiones = [];
    if (dec < 0){
        dec= dec*-1;
    }
    if (dec ==0){
        return 0;
    }
    let res= dec;
    do{
        divisiones.push(res%2);
        res = parseInt(res/2);
        if (res== 1){
            divisiones.push(1);
        }

    }while(res != 1)
    let bin = divisiones.reverse().join("");
    console.log(bin);
    return bin;
}