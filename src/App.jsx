import { useState } from 'react'
import './App.css'
//components
import TicketForm from './components/TicketForm'
import Ticket from './components/Ticket'

function App() {
  //state to store ticket data
  const [ticketData, setTicketData] = useState(null)
  console.log("Ticket Data: ", ticketData)
  const handleTicketSubmit = (data) => {
    setTicketData(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Conference Ticket Generator</h1>
      </header>
      <TicketForm onTicketSubmit={handleTicketSubmit} />
      {ticketData && <Ticket TicketData={ticketData} />}
    </div>
  )
}

export default App
