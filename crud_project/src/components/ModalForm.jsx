import React, { useState } from 'react'

const Modalform = ({ isOpen, onClose, mode, OnSubmit}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [status, setStatus] = useState(false);

  const handleStatusChange = (index) => {
    setStatus(index.target.value === "Active");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  }

  return (
    <>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal" open={isOpen}>
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit}>
        <h3 className='font-bold text-lg py-4'>{mode === "edit" ? "Edit Client" : "Client Details"}</h3>
      {/* if there is a button in form, it will close the modal */}
      <button type="button" onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

        <div className="m-6 py-2 flex flex-col gap-4">
  <label>
    Name
    <input type="text" className="input w-full" value={name} onChange={(index) => setName(index.target.value)} placeholder="Type here" />
  </label>

  <label>
    Job
    <input type="text" className="input w-full" value={job} onChange={(index) => setName(index.target.value)} placeholder="Type here" />
  </label>

  <label>
    Email
    <input type="text" className="input w-full" value={email} onChange={(index) => setName(index.target.value)} placeholder="Type here" />
  </label>

  <fieldset className="fieldset w-full">
    <legend className="fieldset-legend">Status</legend>
    <select value={status ? "Active" : "Inactive"} defaultValue="Pick a status" className="select w-full" onChange={handleStatusChange}>
      <option disabled={true}>Pick a status</option>
      <option>Active</option>
      <option>Inactive</option>
    </select>
    <span className="label">Required</span>
  </fieldset>
</div>
      <div className="flex justify-center">
        <button
          onClick={OnSubmit}
          className="btn btn-success"
        >
          {mode === "edit" ? "Save Changes" : "Add Client"}
        </button>
      </div>

    </form>
  </div>
</dialog>
    </>
  )
}

export default Modalform