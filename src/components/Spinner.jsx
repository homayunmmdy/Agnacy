import React from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center m-1'>
      <MDBSpinner  color={'danger'} style={{ width: '4rem', height: '4rem' }}>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      
    </div>
  )
}

export default Spinner
