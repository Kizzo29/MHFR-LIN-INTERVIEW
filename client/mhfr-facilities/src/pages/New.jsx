import React from 'react'

const New = () => {
  return (
    <div className='new'>
         <h1>Create New Facility</h1>
    <form>
      <input required type='text' placeholder='facility_name*'/>
      <input required type='password' placeholder='district*'/>
      <input required type='text' placeholder='owner*'/>


      <button>Submit</button>
      <p>Facility already exists!</p>
      <span> Facility code is </span>
    </form>
    </div>
  )
}

export default New