import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

const TableList = ({ handleOpen, searchTerm }) => {

  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get('http://localhost:3000/api/clients');
          setTableData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

 const filteredData = tableData.filter(client =>
  client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  client.job.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <>

    <div className="overflow-x-auto mt-16">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody> 
         {/* row 1 */}
    {filteredData.map((client) => (
        <tr className="hover:bg-base-300">
            <th>{client.id}</th>
            <td>{client.name}</td>
            <td>{client.job}</td>
            <td>{client.email}</td>
            <td>
                <button className={`btn rounded-full w-20 ${client.isActive ? `btn-primary` : `btn-outline btn-primary`}`}>
                  {client.isActive ? 'Active' : 'Inactive'}
                </button>
            </td>
          <td>
              <button onClick={() => handleOpen('edit')} className='btn btn-secondary'>Update</button>
          </td>
          <td>
              <button className='btn btn-error'>Delete</button>
          </td> 
        </tr>
        ))}

       
      
    
      
    </tbody>
  </table>
</div>

    </>
  )
}

export default TableList