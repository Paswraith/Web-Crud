import { useState } from 'react'
import './App.css'
import Modalform from './components/Modalform'
import Navbar from './components/Navbar'
import Tablelist from './components/TableList'
import axios from 'axios'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState('')

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  }

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("added modal mode");
    } else {
      console.log("Edit modal mode");
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
        mode={modalMode}
      />
    </div>
  )
}

export default App
