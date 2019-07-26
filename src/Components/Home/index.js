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
        backgroundColor:"#000",
        width:"100vw",
        height:"100vh",
        alignItems:"center",
        flexDirection:"column" }}>
          <div style={{marginBottom:"8px"}}>
          <Card  
           style={{flex:1,width:"600px",height:"15px",backgroundColor:"crimson",color:"black"}}>
            <p>snhds</p>  
          </Card>
          </div>
    <Card 
    hoverable
    style={{ width: "600px",height:"600px",boxShadow:"5px 5px #444444",backgroundColor:"gainsboro"}}>
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
        okButtonProps={{hidden:true}}
        cancelText="cancel"
        style={{flex:"1",display:"flex",justifyContent:"center",}}
        >
            <MyUpload/>
        </Modal>
      </div>
       
       <div>
         <Modal
         title="VIDEO"
         visible={this.state.showoff}    
         onCancel={this.closeVideoModal}
         okButtonProps={{hidden:true}}
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
