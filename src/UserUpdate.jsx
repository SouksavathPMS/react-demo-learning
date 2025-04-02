
import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const UserUpdate = () => {
    const { updateUser } = useContext(UserContext);
    const [ name, setName ] = useState("");

    const updateUserHandler = e => {
        e.preventDefault();
        if (name.trim()) {
            updateUser(name);
            setName(""); 
        }
    }

  return (
      <div>
          <h1>UserUpdate</h1>
          <form onSubmit={updateUserHandler}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter new name' />
              <button type="submit">Update</button>
          </form>
    </div>
  )
}

export default UserUpdate