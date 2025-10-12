import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import personService from './services/persons'

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

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    persons.some(person => person.name === newName)
      ? window.alert(`${newName} is already added to phonebook`) 
      : (
        personService
          .create(person)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName(''),
            setNewNumber('')
          })
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