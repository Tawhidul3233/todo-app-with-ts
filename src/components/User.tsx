import React from 'react'
import { propsType } from '../Type/Type';

type PropsType = {
  user: propsType;
  deleteTodo: Function

}

const User = (props: PropsType) => {
  // console.log(props.user)
  const { id, name, username, email, phone, website } = props.user;

  const classWillbe = id % 2 !== 0 ? 'todo' : 'todo1';
  const handelDelete = (id: string) => {
    props.deleteTodo(id)
  }

  return (
    <div className={classWillbe}>
      <p> {id} </p>
      <p> {name} </p>
      <p> {email} </p>
      <p> {website} </p>
      <p> {phone} </p>
      <button onClick={() => handelDelete(id)} >Delete</button>
    </div>
  )
}

export default User