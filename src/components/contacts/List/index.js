import {useState} from 'react'

function List({ contacts }) {

  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
      .toString()
      .toLowerCase().includes(filterText.toLocaleLowerCase())
    })
  })


  return (
    
    <div>


      <input placeholder='Filter contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>

      <ul>
        {
          filtered.map((contact, i) => <li key={i}>
            {contact.fullname}
          </li>)
        }
      </ul>

        <br />
        <br />
        <hr />

      <p id='totalMember'>{`Toplam kişi ${filtered.length}`}</p>
    </div>
  )
}

export default List
