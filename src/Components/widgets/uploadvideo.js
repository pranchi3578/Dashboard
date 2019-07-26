import { Upload, Button, Icon } from 'antd';
import React, { Component } from "react";

import renderEmpty from 'antd/lib/config-provider/renderEmpty';
class uploadVideo extends React.Component{
render(){
const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};
return(
    <div>
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Upload
        </Button>
      </Upload>
    </div>
  );

}

}



export default uploadVideo;