
'use client'

import React, { useEffect, useState } from 'react'
import Form from '../components/Form/Form'
import FormInput from '../components/Inputs/FormInput'
import Dropdown from '../components/Inputs/Dropdown'


export default function Create() {

  const [userData, setUserData] = useState({})
  useEffect(() => {
    console.log(userData)
  
      }, [userData]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-96" >
          <Form title="User Info">
            
              <label className="block">
                  <FormInput changedValue={(name) => setUserData({...userData, "name":name })} type="text" label="name"/>
              </label>

              <label className="block">
                  <FormInput changedValue={(phone_number) => setUserData({...userData, "phone_number":phone_number })} type="number" label="phone" placeholder="Insert your phone no"/>
              </label>


              {/* <label className="block">
                  <FormInput changedValue={(description) => setUserData({...userData, "description":description })} type="date" label="description"/>
              </label> */}

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
          </Form>
      </div>
    </main>
  )
}
