
'use client'

import React, { useEffect, useState } from 'react'
import FormInput from '@/components/Inputs/FormInput'
import Dropdown from '@/components/Inputs/Dropdown'
import Ckeditor from '@/components/Inputs/Ckeditor'
import PrimaryBtn from '@/components/Button/PrimaryBtn'
import Form from '@/components/Form/Form'
// import { networkPost } from '@/utils/network'
export default function Create() {

  const [userData, setUserData] = useState({})



  const submitData = () => {
    console.log(userData, 'asdfsdf')
    // networkPost()
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-96" >
          <Form title="Insert User Info">
            
              <label className="block">
                  <FormInput changedValue={(name) => setUserData({...userData, "name":name })} type="text" label="name"/>
              </label>

              <label className="block">
                  <FormInput changedValue={(phone_number) => setUserData({...userData, "phone_number":phone_number })} type="number" label="phone" placeholder="Insert your phone no"/>
              </label>


              <label className="block">
                  <FormInput changedValue={(birthdate) => setUserData({...userData, "birthdate":birthdate })} type="date" label="Birthdate" />
              </label>

              <label className="block">
                  <Dropdown label="Status" changedValue={(active_status) => setUserData({...userData, "active_status":active_status })} />
              </label>

              
              {/* <label className="block border border-black  text-xs p-3">
                  <Dropzone onDrop={acceptedFiles => setUserData({...userData, "profile_picture":acceptedFiles })}>
                      {({getRootProps, getInputProps}) => (
                          <section>
                          <div {...getRootProps()}>
                              <input {...getInputProps()} />
                              <p>Drag 'n' drop some files here, or click to select files</p>
                          </div>
                          </section>
                      )}
                  </Dropzone>
              </label> */}
              

              {/* <ButtonPrimary  type="submit" title="Submit">Continue</ButtonPrimary> */}
              <button onClick={() => submitData()}>Submit</button>
              <PrimaryBtn onClick={() => submitData} title="Submit" />
          </Form>
      </div>
      <div className='mt-10'>
          <Ckeditor title="User Details" editorData={(description) => setUserData({...userData, "description":description })}/>
      </div>
    </main>
  )
}
