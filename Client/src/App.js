import {useRef,useState,useEffect} from 'react';
import './App.css';
import { uploadFile } from './services/api';


function App() {
  const fileInputRef = useRef();

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
const onUploadClick = () => {
  fileInputRef.current.click();
}

  useEffect(() => {
    const getImage = async () =>{
      if(file)
      {
        const data = new FormData();
        data.append("name", file.name)
        data.append("file", file)

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  return (
    <div className="container">
      <div className="wrapper">
        <h1>FERN</h1>
        <h3>Simple file sharing application!</h3>
        <button onClick= {() => onUploadClick()}>Upload</button>
        <input
        type='file' ref={fileInputRef} 
        style={{display: 'none'}}
        onChange={(e) => setFile(e.target.files[0])}
         />
         <a href={result} target="_blank">{result}</a><br/>
      </div>
    </div>
  );
}

export default App;
