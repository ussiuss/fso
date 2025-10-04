import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  const filteredPeople = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addPerson = (event) => {
    const newNameTrimmed = newName.trim().replace(/ +/g, ' ')
    const newNumberTrimmed= newNumber.trim().replace(/ +/g, ' ')
    event.preventDefault()
    const person = {
      name: newNameTrimmed,
      id: Math.max(0 ,...persons.map(person => person.id)) + 1,
      number: newNumberTrimmed 
    }

    persons.some(person => person.name === newNameTrimmed)
      ? window.alert(`${newNameTrimmed} is already added to phonebook`) 
      : (
        setPersons(persons.concat(person)),
        setNewName(''),
        setNewNumber(''),
        console.log('Cleared inputs!')
        )
  }



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with<input value={newFilter}
          onChange={handleFilterChange}/>
        </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {filteredPeople.map(person => 
          <Person key={person.id} person={person} />
        )}
    </div>
  )
}

export default App