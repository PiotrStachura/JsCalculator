//calculator functions
function $(id) {
	return document.getElementById(id);
}
function calc_display(str){
    $("ekran").innerText=str;
}
function calc_memdisplay(){
    if(calc_mem!=0){
    $("ekran-mem").innerText=calc_mem;}
    else{
    $("ekran-mem").innerText="";
    }
}
function calc_display_get(){
    return parseFloat($("ekran").innerText);
}
function calc_display_getSTR(){
    return $("ekran").innerText;
}
function calc_append(str){
    $("ekran").innerText+=str;
}
function calc_appendstr(str){
    $("ekran").innerText+=str;
}
function calc_clear(){
    let temp = $("ekran").innerText;
    $("ekran").innerText="";
    calc_mem=0;
    calc_memdisplay();
    current_operation="";
    return temp;
}
function calc_backspace(){
    if(calc_display_getSTR()!="Infinity"){
    $("ekran").innerText=$("ekran").innerText.substr(0,$("ekran").innerText.length-1);
    }
    else{
        calc_clear();
    }
}

//Event listeners
for(let i =0; i<=9;i++){
$("btn-"+i).addEventListener("click",()=>{
    calc_append(i);
});
}
$("btn-Clear").addEventListener("click",()=>{
    calc_clear();
});
$("btn-Backspace").addEventListener("click",()=>{
    calc_backspace();
});

var calc_mem=0;
var current_operation="";

$("btn-+").addEventListener("click",()=>{
    if(current_operation!="+"&&calc_display_getSTR()!=""){
    calc_mem=parseFloat(calc_clear());
    current_operation="+";
    calc_memdisplay();
    }
});

$("btn--").addEventListener("click",()=>{
    if(current_operation!="-"&&calc_display_getSTR()!=""){
    calc_mem=parseFloat(calc_clear());
    current_operation="-";
    calc_memdisplay();
    }
});

$("btn-neg").addEventListener("click", ()=>{
    if(calc_display_getSTR()!=""){
        let temp = calc_display_get();
        temp =-temp;
        calc_display(temp);
    }
})

$("btn-*").addEventListener("click",()=>{
    if(current_operation!="*"&&calc_display_getSTR()!=""){
    calc_mem=parseFloat(calc_clear());
    current_operation="*";
    calc_memdisplay();
    }
});

$("btn-/").addEventListener("click",()=>{
    if(current_operation!="/"&&calc_display_getSTR()!=""){
    calc_mem=parseFloat(calc_clear());
    current_operation="/";
    calc_memdisplay();
    }
});

$("btn-Calculate").addEventListener("click",()=>{
    switch(current_operation){
        case "":
        break;

        case "+":
        calc_display(calc_mem+calc_display_get());
        current_operation="";
        calc_mem=0;
        calc_memdisplay();
        break;

        case "-":
        calc_display(calc_mem-calc_display_get());
        current_operation="";
        calc_mem=0;
        calc_memdisplay();
        break;

        case "*":
        calc_display(calc_mem*calc_display_get());
        current_operation="";
        calc_mem=0;
        calc_memdisplay();
        break;

        case "/":
        calc_display(calc_mem/calc_display_get());
        current_operation="";
        calc_mem=0;
        calc_memdisplay();
        break;
    }
});

$("btn-.").addEventListener("click",()=>{
    if(calc_display_getSTR()!=""){
        calc_appendstr(".");
    }
})

$("btn-%").addEventListener("click",()=>{
    if(calc_display_getSTR()!=""){
        let temp = calc_display_get();
        temp =temp/100;
        calc_display(temp);
    }
})
$("btn-sqrt").addEventListener("click",()=>{
    if(calc_display_getSTR()!=""){
        let temp = calc_display_get();
        temp =Math.sqrt(temp);
        calc_display(temp);
    }
})
$("btn-sq").addEventListener("click",()=>{
    if(calc_display_getSTR()!=""){
        let temp = calc_display_get();
        temp =Math.pow(temp,2);
        calc_display(temp);
    }
})
