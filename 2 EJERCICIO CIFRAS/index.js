const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let nums = Array();
    nums.push(formulario.numero1.value);  
    nums.push(formulario.numero2.value);  
    nums.push(formulario.numero3.value);  
    nums.push(formulario.numero4.value);  
    nums.push(formulario.numero5.value);
    if(nums[1] =="" || nums[2] =="" ||nums[3] =="" ||nums[4] ==""||nums[5] ==""){
        alert("debe ingresar todos los valores ");
    }
    else{
        calcularnum(nums); 
    } 
});

function calcularnum(nums){
    let valf="";
    for (let i = 0; i < nums.length; i++) {
        valf +=nums[i][i];
    }
    document.getElementById("result").textContent = valf;
}
