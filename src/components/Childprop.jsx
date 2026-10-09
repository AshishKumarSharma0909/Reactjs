import React from 'react'

const Childprop = (props) => {
  return (
    <div>
        <h1 className='propheading'> Hello My Name :- {props.firstName} </h1>
        <p className='propheading'>  Hello My Email Id Is :-  {props.firstEmail} </p>
    </div>
  )
}

export default Childprop 