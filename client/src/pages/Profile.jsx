import React, { useEffect, useState } from 'react'
import { getStorage,ref, uploadBytesResumable ,getDownloadURL} from 'firebase/storage'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import {app} from  '../../firebase'


export default function Profile() {
  const fileRef = useRef(null)
  const { currentUser } = useSelector(state => state.user)

  const [file,setFile] = useState(undefined) //no files yet
  const[filePerc,setFilePerc] = useState(0)
  const[fileUploadError,setFileUploadError] = useState(false)
  const [formData,setFormData] = useState({

  })
  
//  firebase storage upload ımage
//   allow read;
//   allow write: if
//       request.resource.size < 2 * 1024 * 1024 &&
//       request.resource.contentType.matches('image/.*');

useEffect(() => {
  if(file){
    handleFileUpload(file)
  }
}, [file])

const handleFileUpload = (file) => {
 const storage = getStorage(app)
 const fileName = new Date().getTime()+file.name
 const storageRef = ref(storage,fileName)
 const uploadTask = uploadBytesResumable(storageRef,file)

 uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    setFilePerc(Math.round(progress))
  },
  (error) => {
    setFileUploadError(true);
  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setFormData({
        ...formData,
        avatar:downloadURL
      })
    }
    )
    });
  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        < input  onChange={(e)=>setFile(e.target.files[0])}  type='file'  ref={fileRef} hidden accept='image/*'/>
        <img  onClick={()=> fileRef.current.click()}   src={formData.avatar || currentUser.avatar}  alt='profile' className='w-32 h-32  cursor-pointer self-center rounded-full object-cover'/>
        <p>
          {fileUploadError ? (
          <span className='text-red-700'>Error image upload</span>
        ) : filePerc > 0 && filePerc < 100 ? (
            <span className='text-slate-700'>
                {`Uploading ${filePerc}%`}
            </span>
            ) : filePerc === 100 ? (
              <span className='text-green-700'>Image Succesfuly Uploaded</span>
            ) : (
              ''
           )}
        </p>
       {/* A reference is created using useRef fileRef.
      This reference is assigned to the input type='file' element.
       When the user clicks on the img element, fileRef current click is called,
          which triggers the click event of the input element and opens the file selection dialog.
         */}
        
        <input 
        type='text'
        placeholder='username'
        id='username'
        className='border p-3 rounded-lg'
         />

        <input
          type='email'
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
          
        />
        <input
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>
        Update </button>
      <Link  className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95'
          to={'/create-listing'} >
             Create Listing
      </Link>
    </form>
    <div className='flex justify-between mt-5'>
    <span className='text-red-700 cursor-pointer font-bold'>Delete Account</span>
    <span className='text-red-700 cursor-pointer font-bold'>Sign Out</span>
    </div>
     
    
    </div>
  )
}
