import {useState, useEffect} from 'react'
import List from './List/index'
import Form from './Form/index'
import './style.css'

function Contacts() {
  const [contact, setContacts] = useState([]);

  useEffect(() => {
    console.log(contact)
  }, [contact])

  return (
    <div id='container'>
      <List contacts = {contact}></List>
      <Form addContact={setContacts} contacts={contact} ></Form>
    </div>
  )
}

export default Contacts;
