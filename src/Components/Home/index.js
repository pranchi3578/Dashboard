import React, { Component } from "react";
import { Card, Row } from 'antd';
import { Modal , Button } from 'antd';



export default class index extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  confirm(){
    Modal.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: 'ok',
      cancelText: 'cancel',
    });

  }
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
        <div 
        style={{width:"500px",height:"550px",
        display:"flex",justifyContent:"flex-end",flexDirection:"column",paddingLeft:"510px"}}>
      <Button 
       type="primary"
       shape="circle"
        icon="plus" 
        size="large"
      onClick={this.confirm}
      ></Button>
      </div>
  </Card>
       </div>
      <div>
      <Modal
      title="Modal"
      visible={this.state.visible}
      onOk={this.hideModal}
      onCancel={this.hideModal}
      okText="ok"
      cancelText="cancel"
    >
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </Modal>
      </div>
    
      </div>
    );
  }
}
