import ReactDOM from 'react-dom/client'
import App from './App'

const persons = [{ name: 'Arto Hellas', id: 1, number: '040-1234567'}]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)
