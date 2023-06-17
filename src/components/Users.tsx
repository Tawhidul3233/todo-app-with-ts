import React from 'react'
import User from './User'

type PropsType = {
  users: {
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
  }[]

}
const Users = (props: PropsType) => {
  // console.log(props.users)
  return (
    <div>
      <h2>Users list</h2>
      <div>
        {
          props.users.map( user => <User user={user} key={user.id} /> )
        }
      </div>

    </div>
  )
}

export default Users