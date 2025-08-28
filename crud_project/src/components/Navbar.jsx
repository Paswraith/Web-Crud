import React from 'react'

const Navbar = ({ onOpen, onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Shitty Clients</a>
      </div>

      <div className="navbar-center">
        <div className="form-control">
          <input 
            type="text" 
            placeholder="Search" 
            onChange={handleSearchChange} 
            className="input input-bordered w-28 sm:w-40 md:w-60 lg:w-80"
          />
        </div>
      </div>

      <div className="navbar-end">
        <button className="btn btn-primary" onClick={onOpen}>Add Client</button>
      </div>
    </div>
  )
}

export default Navbar
