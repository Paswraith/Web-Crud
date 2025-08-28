import { useState } from 'react'
import './App.css'
import Modalform from './components/ModalForm'
import Navbar from './components/Navbar'
import Tablelist from './components/TableList'
import axios from 'axios'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState('')
  const [clientData, setClientData] = useState(null);

  const handleOpen = (mode, client) => {
    setClientData(client)
    setIsOpen(true);
    setModalMode(mode);
  }

  const handleSubmit = async (newClientData) => {
    if (modalMode === "add") {
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData);
        console.log('Client added ', response.data)
      } catch (err) {
          console.error('Error adding client: ', err);
      }
      console.log("added modal mode");
    } else {
      console.log("Edit modal mode");
      console.log('Updating client with ID:', clientData.id);
        try {
          const response = await axios.put(`http://localhost:3000/api/clients${clientData.id}`, newClientData);
        } catch (err){
            console.error('Error updating client:', err);
        }
    }
    setIsOpen(false); 
  }

  return (
    <div>
      <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm}/>
      <Tablelist handleOpen={handleOpen} searchTerm={searchTerm}/>
      <Modalform
        isOpen={isOpen}
        OnSubmit={handleSubmit}
        onClose={() => setIsOpen(false)}
        mode={modalMode} clientData={clientData}
      />
    </div>
  )
}

export default App
