
'use client'

import useGet from '@/hooks/useGet';
import React, { useEffect } from 'react'

export default function User() {
  const { data, error, loading, fetchData } = useGet();
  const api = '/userdata/'


  useEffect(() => {
    fetchData(api);
  }, [])


  
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header className='text-2xl font-bold'>Users</header>
        
        
        {/* all users  */}
        <section className='space-y-4'>
            

          {data.map((user, index) => (
            <div className='border border-blue-500 p-2 flex gap-x-3 items-center'>
                <div className='h-20 w-20 border border-4 p-1'>
                  <img src={user.profile_picture} className='h-full w-full' alt="" />
                </div>
              <div className=''>
                <div className='flex  gap-x-3'>
                  <p>{user.name}</p>
                  <p>{user.phone_number}</p>
                </div>
                
              </div>
            </div>
          ))}
        </section>
    </main>
  )
}
