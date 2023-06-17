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
  },

}

const User = (props: PropsType) => {
  // console.log(props.user)
  const { id, name, username, email, phone, website } = props.user;

  const classWillbe = id % 2 !== 0 ? 'todo' : 'todo1';

  return (
    <div className={classWillbe}>
      <p> {id} </p>
      <p> {name} </p>
      <p> {email} </p>
      <p> {website} </p>
      <p> {phone} </p>
      <button>Delete</button>
    </div>
  )
}

export default User