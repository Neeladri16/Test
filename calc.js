function add()
{   
    let num1,num2,res;
    num1=Number(document.calculator.Number1.value);
    num2=Number(document.calculator.Number2.value);
    res=num1+num2;
    document.getElementById("result").innerHTML="The result calculated is"+ res +".";
   
}
function sub()
{
    var num1,num2,res;
    num1=Number(document.calculator.Number1.value);
    num2=Number(document.calculator.Number2.value);
    res=num1-num2;
    document.getElementById("result").innerHTML="The result calculated is"+ res +".";
}
function mult()
{
    var num1,num2,res;
    num1=Number(document.calculator.Number1.value);
    num2=Number(document.calculator.Number2.value);
    res=num1*num2;
    document.getElementById("result").innerHTML="The result calculated is"+ res +".";
}
function div()
{
    var num1,num2,res;
    num1=Number(document.calculator.Number1.value);
    num2=Number(document.calculator.Number2.value);
    res=num1/num2;
    document.getElementById("result").innerHTML="The result calculated is"+ res +".";
}