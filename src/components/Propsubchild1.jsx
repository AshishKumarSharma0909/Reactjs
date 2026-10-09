import React from 'react'

const Propsubchild1 = ({firstuser, firstpass}) => {
  return (
    <div>
        <h1 className='propheading'> Hello My Name :- {firstuser}  </h1>
        <p className='propheading'>  Hello My Email Id Is :- {firstpass}  </p>
    </div>
  )
}

export default Propsubchild1