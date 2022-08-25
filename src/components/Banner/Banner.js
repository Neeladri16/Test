import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function Banner(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://testecomm-api.nxgecom.in/banner/list").then((result) => {
      result.json().then((resp) => {
        console.log("Banner", resp);
        setData(resp);
      });
    });
    console.log("useEffect");
  }, []);

  return (
    <Carousel>
      {/* {
               items.map( (item, i) => <Item key={i} item={item} /> ) 
            } */}   
      {data.map((item,i) => (
        <div key={i}>
          <img alt=""
            src={item.image} 
            justify-content="center"
            align="centre"
            style={{ width: 1300, height: 500 }}
          />
        </div>
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
