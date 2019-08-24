import React, { Component } from "react";
import { Card, Row } from 'antd';
import { Modal , Button } from 'antd';
import MyUpload from '../widgets/uploadimage';
import UploadVideo from'../widgets/uploadvideo';


const ButtonGroup = Button.Group;
export default class index extends Component {
  state = { visible: false,
            showit: false ,
          showoff:false,
        };
  

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
  showImageModal=() => {
    this.setState({
      showit:true,
    });
  }
  closeImageModal=() => {
    this.setState({
      showit:false,
    });
  }
  showVideoModal=()=>{
    this.setState({
      showoff:true,
    })
  }
  closeVideoModal=()=>{
    this.setState({
      showoff:false,
    })
  }
  

  render() {

 
   
   
    return (
      <div>
      <div  style={{
        display:"flex",
        justifyContent:"center",
        backgroundColor:'rgba(15,23,30,1)',
        width:"100vw",
        height:"100vh",
        alignItems:"center",
        flexDirection:"column" }}>
          
    <Card 
    hoverable
    style={{ width: "600px",height:"600px",boxShadow:"2px 2px #888888",backgroundColor:"gainsboro"}}>
        <div 
        style={{width:"500px",height:"550px",
        display:"flex",justifyContent:"flex-end",flexDirection:"column",paddingLeft:"510px"}}>
      <Button 
       type="primary"
       shape="circle"
        icon="plus" 
        size="large"
      onClick={this.showModal}
      ></Button>
      </div>
  </Card>
       </div>
      <div style={{width:"500px",height:"500px"}} >
      <Modal
      
      title="UPLOAD"
      visible={this.state.visible}    
      onCancel={this.hideModal}
      okButtonProps={{hidden:true}}
      cancelText="cancel"
      style={{flex:"1",display:"flex",justifyContent:"center",}}
    >
      <div>
      <ButtonGroup  style={{display:"flex",justifyContent:"center",width:"200px"}}>
      <Button type="primary" icon="file-image"  size="large"
      onClick={this.showImageModal} />
      <Button type="primary" icon="video-camera" size="large"
      onClick={this.showVideoModal} />
    </ButtonGroup>
      </div>
      
    </Modal>
      </div>
      <div>
        <Modal
        title="IMAGE"
        visible={this.state.showit}    
        onCancel={this.closeImageModal}
        cancelText="cancel"
        style={{flex:"1",display:"flex",justifyContent:"center",}}
        >
            <PicturesWall/>
        </Modal>
      </div>
       
       <div>
         <Modal
         title="VIDEO"
         visible={this.state.showoff}    
         onCancel={this.closeVideoModal}
         cancelText="cancel"
         style={{flex:"1",display:"flex",justifyContent:"center",}}
         >
        <UploadVideo/>
         </Modal>
       </div>
    
      </div>
    );
  }
}
