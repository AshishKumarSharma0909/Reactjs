import React from 'react'
import Propsubchild1 from './Propsubchild1'

const Propchild1 = ({ firstuserName , firstpassword}) => {
  return (
    <div>
         <Propsubchild1 firstuser={firstuserName} firstpass={firstpassword}/>
    </div>
  )
}

export default Propchild1