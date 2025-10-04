import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    const newNameTrimmed = newName.trim().replace(/ +/g, ' ')
    event.preventDefault()
    const person = {
      name: newNameTrimmed,
      id: Math.max(0 ,...persons.map(person => person.id)) + 1
    }

    persons.some(person => person.name === newNameTrimmed)
      ? window.alert(`${newNameTrimmed} is already added to phonebook`) 
      : (
        setPersons(persons.concat(person)),
        setNewName('')
        )
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => 
          <Person key={person.id} person={person} />
        )}
    </div>
  )
}

export default App