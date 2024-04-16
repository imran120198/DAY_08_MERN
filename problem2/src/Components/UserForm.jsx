import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const UserForm = () => {
  const [form, setForm] = useState([]);

  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Successfully Submitted");
  };

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        display: "flex",
        flexDirection: "column",
        height: "85vh",
      }}
    >
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
