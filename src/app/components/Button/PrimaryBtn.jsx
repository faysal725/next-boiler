import React from 'react'

export default function PrimaryBtn({title="btn"}) {
  return (
    <button
    class="bg-blue-800 hover:bg-transparent border border-blue-800 hover:text-bg-blue-800 transition px-10 py-1 rounded-lg hover:text-blue-800 text-white"
  >
    {title}
  </button>
  )
}
