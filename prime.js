function number(val)
{  if(val=='odd')
   {   var correct_way=/^[0-9]+$/;
       var first=document.getElementById("first").value;
       var last=document.getElementById("last").value;
          if(first.match(correct_way) && last.match(correct_way))
              true;
          else{
              document.getElementById("message").innerHTML="**Only numbers are allowed";
               return false;
              }
             if(first.length>last.length || last.length<first.length){
        document.getElementById("message").innerHTML="** Range can't be calculated";
        return false;
    }
        if(first=="" || last==""){
         document.getElementById("message").innerHTML="** Please enter both numbers!";
         return false;
    }
   if(first.length<0){
     document.getElementById("message").innerHTML="**First number cant be negative!";
     return false;
   }
   
    var num='';
    arr=[];
    for(i=first;i<=last;i++)
    { 
        if(i%2!=0)
        {
            num = i;
          arr.push(num);
        }
    }
    document.getElementById("result").innerHTML="<br>Odd Numbers:<br>"+arr;
    document.getElementById("odd").innerHTML="<br>No.of Odd numbers:<br>"+arr.length;
     }
    else if(val=='even')
    {
           var correct_way=/^[0-9]+$/;
    var first=document.getElementById("first").value;
     var last=document.getElementById("last").value;
   if(first.match(correct_way) && last.match(correct_way))
      true;
      else{
         document.getElementById("message").innerHTML="**Only numbers are allowed";
          return false;
      }
        

        var num='';
        arr=[];
        for(i=first;i<=last;i++)
        {
            if(i%2==0)
            {
                num = i;
                arr.push(num);
            }
        }
        document.getElementById("result").innerHTML="<br>Even Numbers:<br>"+arr;
        document.getElementById("odd").innerHTML="<br>No. of Even numbers:<br>"+arr.length;
         }
    else if(val=='prime')
        {  var correct_way=/^[0-9]+$/;
           var first=document.getElementById("first").value;
           var last=document.getElementById("last").value;
   if(first.match(correct_way) && last.match(correct_way))
      true;
      else{
         document.getElementById("message").innerHTML="**Only numbers are allowed";
          return false;
      }


          var num='';
         var temp=0;
         arr=[];
          for(i=first;i<=last;i++)
            {
                for(j=2;j<i;j++)
                {
                    if(i%j==0)
                    {
                        temp=0;
                        break;
                    }
                    else{
                        temp=1;
                    }
                }
                if(temp)
                {
                    num=i;
                    arr.push(num);
                    document.getElementById("result").innerHTML="<br>Odd Numbers:<br>"+arr;
                    document.getElementById("odd").innerHTML="<br>No. of prime numbers:<br>"+arr.length;
                }
            }

        }     
    }
