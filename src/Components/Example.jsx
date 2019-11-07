import React from 'react';
import {useDropzone} from 'react-dropzone';
import "../Components/Basic.css";

function DropzoneWithoutClick(props) {
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({noClick: true});
  const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div className="box-drop">
        <p><i className="fas fa-cloud-upload-alt"></i> you can also drop your file here</p>
        </div>
      </div>
      <aside>
        <ul id="drop-file">{files}</ul>
      </aside>
    </section>
  );
}

export default DropzoneWithoutClick;