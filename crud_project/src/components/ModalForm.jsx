import React, { useEffect, useState } from 'react'

const Modalform = ({ isOpen, onClose, mode, OnSubmit, clientData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [status, setStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newClient = { name, email, job, isactive: status };
      await OnSubmit(newClient);

     
      setSuccessMessage("Client added successfully!");

      
      setName('');
      setEmail('');
      setJob('');
      setStatus(false);

     
      setTimeout(() => {
        window.location.reload();
      },1000);

    } catch (err) {
      console.error("Error adding client", err);
    }
  };

  useEffect(() => {
    if (mode === "edit" && clientData) {
      setName(clientData.name);
      setEmail(clientData.email);
      setJob(clientData.job);
      setStatus(clientData.isactive);
    } else {

      setName('');
      setEmail('');
      setJob('');
      setStatus(false);
    }

  }, [mode, clientData]);

  return (
    <dialog id="my_modal_3" className="modal" open={isOpen}>
      <div className="modal-box">
        <form method="dialog" onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <div className="m-6 py-2 flex flex-col gap-4">
            <label>
              Name
              <input
                type="text"
                className="input w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type here"
                required
              />
            </label>

            <label>
              Job
              <input
                type="text"
                className="input w-full"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="Type here"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                className="input w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type here"
                required
              />
            </label>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Status</legend>
              <select
                value={status ? "Active" : "Inactive"}
                className="select w-full"
                onChange={handleStatusChange}
              >
                <option disabled>Pick a status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </fieldset>
          </div>

          {successMessage && (
            <p className="text-green-600 font-semibold text-center my-2">
              {successMessage}
            </p>
          )}

          <div className="flex justify-center">
            <button type="submit" className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modalform;
