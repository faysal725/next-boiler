import React from 'react'

export default function Form({title="form", children}) {
  return (

          <div className="grid grid-cols-1 gap-6" >
            
            
            <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
            {title}
            </h2>
              {children}
            {/* <label className="block">
              <FormInput changedValue={(mailValue) => console.log(mailValue)} type="text" label="name"/>
            </label>

            
            <label className="block">
              <FormInput changedValue={(mailValue) => console.log(mailValue)} type="date" label="Birthdate"/>
            </label>

            <label className="block">
              <Dropdown label="Status" changedValue={(mailValue) => console.log(mailValue)} />
            </label>
            

            <ButtonPrimary  type="submit" title="Submit">Continue</ButtonPrimary> */}
          </div>
  )
}
