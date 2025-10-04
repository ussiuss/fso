import { useState } from 'react'
import Person from './components/Person'

const Filter = (props) => {
  return(
    <div>
      filter shown with<input value={props.newFilter}
      onChange={props.handleFilterChange}/>
    </div>
  )
}

const PersonForm = (props) => {
  return(
    <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName}
          onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input value={props.newNumber}
          onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = (props) => {
  const filteredPeople = props.persons.filter(person => 
    person.name.toLowerCase().includes(props.filter.toLowerCase()))
    
  return(
    <>
    {filteredPeople.map(person => 
      <Person key={person.id} person={person} />
    )}
    </>
  )
}

const App = (props) => {
  const [persons, setPersons] = useState(props.persons) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
        setNewNumber('')
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
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} 
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={newFilter}/>
    </div>
  )
}

export default App