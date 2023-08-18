import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
import './userprofile.css'

function ConnectBackend() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  const [usersData, setUsersData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/adddata", formData)
      .then((response) => {
        console.log("User data submitted:", response.data);
        setFormData({ firstName: "", lastName: "", age: "" });
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };
  const handleFetchUsers = () => {
    axios
      .get("http://localhost:3333/users")
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  const deleteUsers = (id) => {
    axios
      .delete(`http://localhost:3333/deletedata/${id}`)
      .then((response) => {
        console.log("User deleted:", response.data);
        handleFetchUsers();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  // const UpdateUser = (id,updatedUser) => {
  //   axios
  //     .put(`http://localhost:3333/updatedata/${id}`, updatedUser)
  //     .then((response) => {
  //       console.log("User updated:", response.data);
  //       handleFetchUsers();
  //     })
  //     .catch((error) => {
  //       console.error("Error updating user:", error);
  //     });
  // };

  return (
    <div>
      <h1 className="title">Create User Profile</h1>
      <div className="container-form">
        <form onSubmit={handleSubmit} className="form-user">
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input className="inputform"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input className="inputform"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input className="inputform"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="btn-profile">
          <button className='btnform' type="submit">Create User</button>
          <button className='btnform'onClick={handleFetchUsers}>Show Detail</button>
          </div>
        </form>
      </div>

      <Form className="form-profile">
               
          {usersData.map((user) => (
            <div key={user.id} className="list-user">
              <p className="content-user">
                Name: {user.firstname} {user.lastname}
              </p>
              <p className="content-user">Age: {user.age} years old</p>

              <button className="btnform" onClick={() => deleteUsers(user.id)}>Delete User</button>
             
            </div>
          ))}
        
      </Form>
    </div>
  );
}

export default ConnectBackend;
