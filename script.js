
var result=0;
var input;
var lastResult=0;
var lastOperation;

function operations(operation)
{
    input=document.getElementById("input").innerHTML;
   

    if(result==0)
    {
        result=parseFloat(input);
        
    }
    else{
        calculate(lastOperation,parseFloat(input));
    }
    lastOperation=operation;
    
    document.getElementById("input").innerHTML='0';
}

function calculate(operation,number)
{
    switch(operation)
    {
        case '+':
            result+=number;
            break;

        case '-':
            result-=number;
            break;

        case '*':
            result*=number;
            break;
        
        case '/':
            if(input=="0"){
                alert("Division by zero!!!");
               
                break;
            }
            result/=number;
            break;

        default:
            break;
    }
    
}

function getNumber(number)
{
    input=document.getElementById("input");
    
    if(input.innerHTML=='0'){
        input.innerHTML=number;
    }
    else{
        let numFirst=input.innerHTML;
        numFirst+=number;
        input.innerHTML=numFirst;
    }
}

function getResult(){
    operations(lastOperation);
    input=document.getElementById("input");
    input.innerHTML=result.toString();
    lastResult=result; 
    result=0;
}

function lResult()
{
    input=document.getElementById("input");
    input.innerHTML=lastResult;
}

function clearAll()
{
    result=0;
    input=document.getElementById("input");
    input.innerHTML="0";
}