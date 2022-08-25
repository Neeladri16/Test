import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {  grey } from '@mui/material/colors';
import {Link} from 'react-router-dom'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText( grey[500]),
  backgroundColor:  grey[500],
  '&:hover': {
    backgroundColor:  grey[700],
  },
}));


  export default  function Details(props){
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
  }, [id]);

  const variants =(option,val) => {
    console.log("variants",val,option)
   // const arr=[{val,option}]                                          
   // console.log("arr",arr)
   
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
                          style={{ width: 200,  margin: 4 }} />
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

     <Stack spacing={2} direction="row"  style={{
                                                alignItems:'center',
                                                justifyContent:'center',}}>
      <ColorButton  variant="contained">
      <Link to="/Cart" >Add to cart</Link>
        </ColorButton>
    
    </Stack>

    </Paper>
  </Box>
    );
    
}



