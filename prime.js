function number(val)
{  if(val=='odd')
   {
    var first=document.getElementById("first").value;
    var last=document.getElementById("last").value;
    var num="<br>Odd Numbers:<br>";
    for(i=first;i<=last;i++)
    {
        if(i%2!=0)
        {
            num += i + ",";
            number.push(num);
            const num=[];
            let length=num.length;
        }
    }
    document.getElementById("result").innerHTML=length;
     }
    else if(val=='even')
    {
        var first=document.getElementById("first").value;
        var last=document.getElementById("last").value;
        var num="<br>Even Numbers:<br>";
        for(i=first;i<=last;i++)
        {
            if(i%2==0)
            {
                num += i + ",";
            }
        }
        document.getElementById("result").innerHTML=num;
         }
    else if(val=='prime')
        { var first=document.getElementById("first").value;
          var last=document.getElementById("last").value;
          var num="<br>Prime Numbers:<br>";
         var temp=0;
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
                    num+=i+",";
                    document.getElementById("result").innerHTML=num;
                }
            }

        }     
    }
