import React, { ChangeEvent, FormEvent, useState } from 'react'

type Props = {
  userAdd: Function;
}

const AddUser = (props: Props) => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handelNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };
  const handelEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  };

  const handelUserAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      id: 44,
      name,
      username: "Moriah Stanton",
      email,
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232"
        }
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
      }
    }
    props.userAdd(
      { user }
    )
  }

  return (
    <form onSubmit={handelUserAdd}>
      <p>Add user</p>
      <label htmlFor="name">
        Name:
        <input placeholder='Enter name' id='name' name='name' type="text" autoFocus onChange={handelNameChange} />
      </label> <br />
      <label htmlFor="email">
        Name:
        <input placeholder='Enter email' id='email' name='email' type="email" onChange={handelEmailChange} />
      </label> <br />
      <button type='submit' > Add user </button>
    </form>
  )
}

export default AddUser