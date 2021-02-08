let form = document.getElementById("form");
let resp = document.getElementById("result");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let hor= parseInt(form.hora.value) ;
    let min = parseInt(form.min.value);
    let seg = parseInt(form.seg.value);
    if((isNaN(hor)) ||(isNaN(min))|| (isNaN(seg))){
        alert("No deben existir parámetro vacios");
        return;
    }
    let vec  = horasig(hor,min,seg);
    resp.querySelector("#horas").value = vec[0];
    resp.querySelector("#mins").value = vec[1];
    resp.querySelector("#segs").value = vec[2];

});

function horasig(hor,min,sec){
    if (sec >= 59){
        sec = 0;
        if(min >=59){
            min =0
            if (hor >=23){
                hor =0
            }
            else{
                hor = hor+1;
            }
        }
        else{
            min = min+1;
        }
    }
    else{
        sec = sec+1;
    }
   return [hor,min,sec];
}