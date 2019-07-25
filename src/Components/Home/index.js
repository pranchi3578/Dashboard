import React, { Component } from "react";
import { Card, Row } from 'antd';
import { Button } from 'antd';



export default class index extends Component {
  render() {
   
    return (
      <div>
      <div  style={{
        display:"flex",
        justifyContent:"center",
        backgroundColor:"#000",
        width:"100vw",
        height:"100vh",
        alignItems:"center",
        flexDirection:"column" }}>
    <Card 
    hoverable
    style={{ width: "600px",height:"600px",boxShadow:"5px 5px #444444"}}>
        <div style={{width:"500px",height:"550px",
        display:"flex",justifyContent:"flex-end",flexDirection:"column",paddingLeft:"510px"}}>
      <Button  type="primary" shape="circle" icon="plus" size="large"></Button>
      </div>
  </Card>
       </div>
      
    
      </div>
    );
  }
}
