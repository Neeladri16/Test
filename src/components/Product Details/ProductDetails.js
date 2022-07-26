import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from "react";


  export default  function Details(){
     const [data, setData] = useState([]);
     //const [allcombinations,setAllcombinations]=useState([])
     var {id} =useParams(); 
     useEffect(() => {
    fetch(
       " https://testecomm-api.nxgecom.in/product_details/"+id 
        ).then((result) => {
      result.json().then((resp) => {
        console.log("details", resp);
        setData(resp)
       // setAllcombinations(resp.allcombinations);
      });
    });
    console.log("useEffect");
  }, []);
  
  const variants =(option,val) => {
    console.log("variants",val,option)
   // const arr=[{val,option}]                                          
   // console.log("arr",arr)
   var obj={};
    
   for(var i=0;i<=option.length;i++)
   {
    obj[option[i]]=val[i]
   }
   for (var option of Object.option(obj)) {
    document.write(option + " => " + obj[option] + "</br>")
}
console.log("obj",obj)
  }

  console.log("pid",id)
  return(
    <Box
    sx={{
      display: 'flex',
      '& > :not(style)': {
        m: 2,
        width: 800,
        height: 500,
      },
    }}
  >
    <Paper variant="outlined" >
          {data.variants !== undefined?
          data.variants.slice(0,1).map((item,i) => (
          <div key={i}>
              {
                item.image.map((val,i)=>(
                     <div key={i}>
                         <img src={val.img_url} alt=""
                          justify-content="center"
                          align="centre"
                          style={{ width: '80%',  margin: 4 }} />
                        </div>
                ))
              }
        </div>
      )):""
    }
    </Paper>
    
    <Paper variant="outlined" square>
      { data !== undefined?
        <div >
          <h1>Name: {data.name}</h1>
          <h3> Description:{data.description}</h3>
          <h3>Reviews:{data.numReviews}</h3>
          <h3>Rating: {data.rating}</h3>
        </div>
    :""}

    {   data.options !== undefined?
        data.options.map((item,i)=>(
            <div key={i}>
              <table>
                    <tr>
                        <td> <h1>{item.option_name}:</h1></td>
                    </tr>
                </table>
              
                {
                    item.option_value.map((val,i)=>(
                        <div key={i}>
                           <input type='radio' onClick={()=>variants(item.option_name,val.variant_option_value_id)} name={item.option_name} ng-model='mValue' value='first' />{val.option_value}
                        </div>
                    ))
                }
            </div>
        )):""
    }
    </Paper>
  </Box>
    );
    
}



