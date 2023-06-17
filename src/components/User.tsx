import React from 'react'

type PropsType = {
  user: {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }
}

const User = (props: PropsType) => {
  // console.log(props.user)
  const {id, name, username, email, phone, website } = props.user;

  return (
    <div>
      <p> {name} </p>
      <p> {email} </p>
      <p> {website} </p>
      <p> {phone} </p>
    </div>
  )
}

export default User