import React from 'react';
import {useDropzone} from 'react-dropzone';
import "../Components/Basic.css"


function DropzoneWithoutKeyboard(props) {
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({noKeyboard: true});
  const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

  return (
    <section id="dropzone" className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div className="btn-add-file">
        <button id="btn-add-files" className="btn btn-outline-primary"><a> + Add files</a></button>
        </div>
      </div>
      <aside>
       {/* <div id="overflow" className="overflow-auto">*/}
          <ul className="ul-files">{files}</ul>
       {/* </div>*/}
      </aside>
    </section>
  );
}

export default DropzoneWithoutKeyboard