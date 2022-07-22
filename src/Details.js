import { useState, useEffect } from "react";
import * as React from "react";
import Grid from '@mui/material/Grid';


function Details(){
     const [data, setData] = useState([]);

     useEffect(() => {
    fetch(
      "https://testecomm-api.nxgecom.in/product_details/9694NPLKi"
    ).then((result) => {
      result.json().then((resp) => {
        console.log("details", resp);
        setData(resp);
      });
    });
    console.log("useEffect");
  }, []);
  return(
    <Grid>
      {data.map((item, index) => (
                <div key={index}>
                 <img alt=""
                    src={item.image}
                    justify-content="center"
                    align="centre"
                    style={{ width: 200, height: 150, margin: 14 }}
                  />
                  <h3>name:{item.name}</h3>
                  <h4>response:{item.response}</h4>
                  </div>
                  }
     </Grid>
  );
}
export default Details;