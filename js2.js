function $(id){
    return document.getElementById(id);
}
class calculator {
    constructor(){
        this.memory=0;
        this.currentoperation="";
    }
    

    append(str){
        $("ekran").innerText+=str;
    }
    appendstr(str){
        $("ekran").innerText+=str;
    }
    clear(){
        let temp = $("ekran").innerText;
        $("ekran").innerText="";
        this.memory=0;
        this.memdisplay();
        this.currentoperation="";
        return temp;
    }
    backspace(){
        if(this.getdisplaystring()!="Infinity"){
            $("ekran").innerText=$("ekran").innerText.substr(0,$("ekran").innerText.length-1);
        }
        else{
            this.clear();
        }
    }

    display(str){
        $("ekran").innerText=str;
    }
    memdisplay(){
        if(this.memory!=0){
        $("ekran-mem").innerText=calc.memory;}
        else{
        $("ekran-mem").innerText="";
        }
    }
    getdisplaynumber(){
        return parseFloat($("ekran").innerText);
    }
    getdisplaystring(){
        return $("ekran").innerText;
    }
}
var calc = new calculator();
//Event listeners
for(let i =0; i<=9;i++){
    $("btn-"+i).addEventListener("click",()=>{
        calc.append(i);
    });
    }
    $("btn-Clear").addEventListener("click",()=>{
        calc.clear();
    });
    $("btn-Backspace").addEventListener("click",()=>{
        calc.backspace();
    });
    
    $("btn-+").addEventListener("click",()=>{
        if(calc.currentoperation!="+"&&calc.getdisplaystring()!=""){
        calc.memory=parseFloat(calc.clear());
        calc.currentoperation="+";
        calc.memdisplay();
        }
    });
    
    $("btn--").addEventListener("click",()=>{
        if(calc.currentoperation!="-"&&calc.getdisplaystring()!=""){
        calc.memory=parseFloat(calc.clear());
        calc.currentoperation="-";
        calc.memdisplay();
        }
    });
    
    $("btn-neg").addEventListener("click", ()=>{
        if(calc.getdisplaystring()!=""){
            let temp = calc.getdisplaynumber();
            temp =-temp;
            calc.display(temp);
        }
    })
    
    $("btn-*").addEventListener("click",()=>{
        if(calc.currentoperation!="*"&&calc.getdisplaystring()!=""){
        calc.memory=parseFloat(calc.clear());
        calc.currentoperation="*";
        calc.memdisplay();
        }
    });
    
    $("btn-/").addEventListener("click",()=>{
        if(calc.currentoperation!="/"&&calc.getdisplaystring()!=""){
        calc.memory=parseFloat(calc.clear());
        calc.currentoperation="/";
        calc.memdisplay();
        }
    });
    
    $("btn-Calculate").addEventListener("click",()=>{
        switch(calc.currentoperation){
            case "":
            break;
    
            case "+":
            calc.display(calc.memory+calc.getdisplaynumber());
            calc.currentoperation="";
            calc.memory=0;
            calc.memdisplay();
            break;
    
            case "-":
            calc.display(calc.memory-calc.getdisplaynumber());
            calc.currentoperation="";
            calc.memory=0;
            calc.memdisplay();
            break;
    
            case "*":
            calc.display(calc.memory*calc.getdisplaynumber());
            calc.currentoperation="";
            calc.memory=0;
            calc.memdisplay();
            break;
    
            case "/":
            calc.display(calc.memory/calc.getdisplaynumber());
            calc.currentoperation="";
            calc.memory=0;
            calc.memdisplay();
            break;
        }
    });
    
    $("btn-.").addEventListener("click",()=>{
        if(calc.getdisplaystring()!=""){
            calc.appendstr(".");
        }
    })
    
    $("btn-%").addEventListener("click",()=>{
        if(calc.getdisplaystring()!=""){
            let temp = calc.getdisplaynumber();
            temp =temp/100;
            calc.display(temp);
        }
    })
    $("btn-sqrt").addEventListener("click",()=>{
        if(calc.getdisplaystring()!=""){
            let temp = calc.getdisplaynumber();
            temp =Math.sqrt(temp);
            calc.display(temp);
        }
    })
    $("btn-sq").addEventListener("click",()=>{
        if(calc.getdisplaystring()!=""){
            let temp = calc.getdisplaynumber();
            temp =Math.pow(temp,2);
            calc.display(temp);
        }
    })