
let operand1=0;
let operand2=0;
let operator=null;
let buttons=document.querySelectorAll(".buttons");
let display=document.querySelector("#display p");


for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",(event)=>{
        let value=event.target.innerText;
        console.log("value",value);
        if(value=="1" || value=="2"|| value=="3"|| value=="4"|| value=="5"|| value=="6"|| value=="7"|| value=="8"|| value=="9"|| value=="0" || value=="."){
            display.innerText+=value;
        }
        else if(value=='+' || value=='-' || value=='*' || value=='/' || value=="%"){
            operand1=parseFloat(display.innerText);
            console.log("operand1",operand1);
            operator=value;
            display.innerText+=value;
        }
        else if(value=="=")
        {
            let displayArr=display.innerText.split(operator);
            operand2=parseFloat(displayArr[1]);
            console.log("operand2",operand2);
            display.innerText=eval(operand1+operator+operand2).toPrecision(5); 
        }
        else if(value=="AC"){
            console.log("Clear display");
            operand1=0;
            operand2=0;
            operator="";
            expression=0;
            display.innerText="";
        }
        else if(value="del")
        {
            if(value=='+' || value=='-' || value=='*' || value=='/' || value=="%")
                operator=null;
            console.log("delete pressed");
            value=display.innerText.substr(0,display.innerText.length-1);
            display.innerText=value;
        }
        else{
            console.log("Expression loading");
            expression=eval(operand1+operator+operand2);
            console.log("expression",expression);
            display.html(expression);
        }
        
    
    })
}

