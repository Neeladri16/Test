function arithmetic(val){
    if(val=='add'){
        num1=document.getElementById("num1").value;
        num2=document.getElementById("num2").value;
        if(num1=="" && num2==""){
            alert("All fields are required!");
            return false;
        }
        var res=parseInt(num1)+parseInt(num2);
        document.getElementById("result").innerHTML="The result calculated is "+ res +".";
    }
    else if(val=='sub'){
        num1=document.getElementById("num1").value;
        num2=document.getElementById("num2").value;
        if(num1=="" && num2==""){
            alert("All fields are required!");
            return false;
        }
        var res=num1-num2;
        document.getElementById("result").innerHTML="The result calculated is "+ res +".";
    }
    else if(val=='mult')
    {
        num1=document.getElementById("num1").value;
        num2=document.getElementById("num2").value;
        if(num1=="" && num2==""){
            alert("All fields are required!");
            return false;
        }
        var res=num1*num2;
        document.getElementById("result").innerHTML="The result calculated is "+ res +".";
    }
    else if(val=='div')
    {
        num1=document.getElementById("num1").value;
        num2=document.getElementById("num2").value;
        if(num1=="" && num2==""){
            alert("All fields are required!");
            return false;
        }
        var res=num1/num2;
        document.getElementById("result").innerHTML="The result calculated is "+ res +".";
    }

}

function change(val){
    if(val=='plus')
    {
     var inputval= document.getElementById("num3").value;
      var x=  ++inputval;
        document.getElementById("num3").value=x;
    }
    else if(val=='minus')
        {    var inputval= document.getElementById("num3").value;
              var y=--inputval;
            if( y>=0){
                
               document.getElementById("num3").value=y;
               
             }
             else{
                alert("Number cant be negative!");
                return false;
             }
        }
    
}
