import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/getUser');

        if (response.data && response.data.users) {
          setUsers(response.data.users); // Assuming response.data.users is an array of user objects
        } else {
          throw new Error('Invalid data received from API');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUsers([]); // Set users as empty array in case of an error
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <div className="table-responsive">
        {Array.isArray(users) && users.length > 0 ? (
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Added Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{new Date(user.addedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
