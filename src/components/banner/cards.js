import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://testecomm-api.nxgecom.in/products/allProducts?category=&sort=null&price=&pageNo=1"
    ).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
        setData(resp);
      });
    });
    console.log("useEffect");
  }, []);
  //   console.log("products",data.products.length)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={2}>
          {data.products != undefined
            ? data.products.map((item, index) => (
                <Item key={index}>
                  <BrowserRouter >
              <Link to="/" exact={1}>Details</Link>
              <Routes>
              <Route path="/" element={  <img
                    src={item.image}
                    justify-content="center"
                    align="centre"
                    style={{ width: 200, height: 150, margin: 14 }}
                  />} />
               
                </Routes>
                </BrowserRouter>
                  <h3>Price:{item.price}</h3>
                  <h4>Rating:{item.rating}</h4>
                  <FormRow />
                </Item>
              ))
            : ""}
        </Grid>
      </Grid>
    </Box>
  );
}

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={8}></Grid>
    </React.Fragment>
  );
}
