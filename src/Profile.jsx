


import React, { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({
        "name": "Souksavath",
        "age": "22"
    })
    const updateProfileHandler = () => {
        if (nameInput.trim() === "" || ageInput.trim() === "") return;
        setProfile({
            ...profile,
            name: nameInput,
            age: ageInput
        })
    }
    const [nameInput, setNameInput] = useState(profile.name);
    const onNameChange =(event) => {
        setNameInput(event.target.value);
    }
    const [ageInput, setAgeInput] = useState(profile.age);
    const onAgeChange =(event) => {
        setAgeInput(event.target.value);
    }
  return (
      <div>
          <h2>{profile.name}</h2>
          <h2>{profile.age}</h2>
          <input value={nameInput} onChange={onNameChange}/>
          <input value={ageInput} onChange={onAgeChange} />    
          <button onClick={updateProfileHandler}>Update profile</button>
    </div>
  )
}

export default Profile