//Allow the adminn to upload pictures of new menu items

import React, { useState, useRef } from "react";
import Button from "../../components/Button/button1";
import { TextField, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import axios from "axios";
import "./style.scss";

const FileUpload = () => {
  const imageRef = useRef(null);
  const [imgFile, setImgFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);

  const handleSubmit = () => {
    if (name === "" || description === "" || price === 0) return;
    const formData = new FormData();
    formData.append('file', imgFile);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);

    axios.post('/products', formData, {
      headers: {
        'x-auth-token': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "content-type": "multipart/form-data"
      }
    }).then((res) => {
      if (res.status) {
        setImgFile(null)
        setPrice(0)
        setDescription("")
        setName("")
      }
    }).catch(err => console.log(err))
  }

  const handleImageUpload = (e) => {
    const { files } = e.target;
    if (files.length === 0) return;
    const loadFile = Object.assign(files[0], { preview: URL.createObjectURL(files[0]) })
    setImgFile(loadFile)
  }

  return (
    <div className="size" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#659B9B', marginBottom: '20px' }}>Add Product</h1>
      <div style={{ width: '320px' }}>
        {imgFile ?
          <div style={{ position: 'relative', marginBottom: '10px', width: '320px', height: '320px' }}>
            <img
              style={{
                borderRadius: '5px',
                width: '320px',
                height: '320px',
              }}
              src={imgFile.preview}
            />
            <div
              style={{ position: 'absolute', top: '-5px', right: '12px', color: '#659B9B', fontSize: '40px', cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation()
                setImgFile(null)
              }}
            >x</div>
          </div>
          :
          <div style={{ marginBottom: '20px' }}>
            <Button
              value={"Upload Image"}
              onClick={() => { imageRef.current.click() }}
            />
          </div>
        }
      </div>
      <input type="file" value="" ref={imageRef} hidden accept="image/*" onChange={handleImageUpload} />
      <div style={{ width: '320px', marginBottom: '10px' }}>
        <TextField size="small" placeholder="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div style={{ width: '320px', marginBottom: '10px' }}>
        <TextField size="small" placeholder="descritpion" fullWidth rows={5} multiline value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div style={{ width: '320px', marginBottom: '10px' }}>
        <FormControl fullWidth variant="standard">
          <OutlinedInput
            size="small"
            fullWidth
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>
      </div>
      <div style={{ width: '300px', marginTop: '20px' }}>
        <Button
          value={"Add Product"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default FileUpload