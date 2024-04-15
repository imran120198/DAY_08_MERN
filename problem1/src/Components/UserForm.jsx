import React, { useRef, useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [validation, setValidation] = useState("");

  const EmailRef = useRef(null);

  const handleChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setValidation("Name is at least 3 characters long");
    } else {
      setValidation("");
    }
  };

  const handleSubmit = () => {
    const userEmail = EmailRef.current.value;
    console.log("Name:", name);
    console.log("Email:", userEmail);
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h2>User Form Controlled vs. Uncontrolled Components</h2>
      <form
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <label>
          Name :{" "}
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>
        {validation && <div style={{ color: "red" }}>{validation}</div>}
        <label>
          Email:
          <input placeholder="Email" type="email" ref={EmailRef} />
        </label>

        <button style={{ width: "200px", margin: "auto" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
