import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

import './App.css'
//components
import TicketForm from './components/TicketForm'
import Ticket from './components/Ticket'
import TicketSelection from './components/TicketSelection';
import Header from './components/Header';

function App() {
  //state to store ticket data
  const [ticketData, setTicketData] = useState(null)
  const [ticketType, setTicketType] = useState('free');
  const [quantity, setQuantity] = useState(1);

  //navigate to the ticket page
  const navigate = useNavigate();

  const handleTicketSubmit = (data) => {
    setTicketData(data)
    navigate("/ticket")
  }

  return (
        <div className="container">
            <Header/>
            <Routes>
              <Route path="/" element={<TicketSelection quantity={quantity} setQuantity={setQuantity}  setTicketType={setTicketType}/>} />
              <Route path="/ticketform" element={<TicketForm onTicketSubmit={handleTicketSubmit} />} />
              <Route path="/ticket" element={<Ticket ticketData={ticketData}  ticketType={ticketType} quantity={quantity}/>} />
            </Routes>
        </div>
  )
}

export default App
