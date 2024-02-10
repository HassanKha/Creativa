import { useState } from 'react'
import './App.css'
import UploadForm from './UploadForm'
import axios from 'axios'
function App() {
//axios.defaults.baseURL = 'https://backend-8fks.onrender.com';
  axios.defaults.withCredentials = true;

  return (
    <>
   
       <UploadForm/>


    </>
  )
}

export default App
