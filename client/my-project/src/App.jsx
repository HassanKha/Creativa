import { useState } from 'react'
import './App.css'
import UploadForm from './UploadForm'
import axios from 'axios'
function App() {
  axios.defaults.baseURL = 'https://creativa.onrender.com/upload'
  axios.defaults.withCredentials = true;

  return (
    <>
   
       <UploadForm/>


    </>
  )
}

export default App
