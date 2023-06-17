import React from 'react'
import User from './User'
import { propsType } from '../Type/Type'

type PropsType = {
  users: propsType[],
  deleteTodo: Function;
}
const Users = (props: PropsType) => {
  // console.log(props.users)
  return (
    <div >
      <h2>Users list</h2>
      <div className='todos'>
        {
          props.users.map( user => <User  user={user} key={user.id} deleteTodo={props.deleteTodo} /> )
        }
      </div>

    </div>
  )
}

export default Users