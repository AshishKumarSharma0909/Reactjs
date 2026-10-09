
import React, { useState } from 'react'

const Formdata = () => {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  function handleform(e) {
    e.preventDefault()

    console.log(user, email, pass)

    setUser("")
    setEmail("")
    setPass("")
  }

  return (
    <div id='formdataparent'>

      <div id='formdatachild'>

        <p id="formheading">Instagram</p>

        <form action="" onSubmit={(e) => { handleform(e) }}>

          <label htmlFor="" className='formlabel'>Username</label>
          <br />

          <input
            type="text"
            name="type"
            id="userfiled"
            value={user}
            onChange={(e) => { setUser(e.target.value) }}
          />

          <br />

          <label htmlFor="" className='formlabel'>Email</label>
          <br />

          <input
            type="email"
            name=""
            id="emailfiled"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />

          <br />

          <label htmlFor="" className='formlabel'>Password</label>
          <br />

          <input
            type="password"
            name=""
            id="passwordfiled"
            value={pass}
            onChange={(e) => { setPass(e.target.value) }}
          />

          <br />

          <button id='formbutton'>Submit Here</button>

        </form>

      </div>

    </div>
  )
}

export default Formdata


