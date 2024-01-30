import { useState } from "react";

export default function StateLogin() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const [edited, setEdited] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = edited.email && !enteredValue.email.includes("@");
  console.log(edited.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(enteredValue);
    setEnteredValue({
      email: "",
      password: "",
    });
  };
  const handleChangeInput = (identifier, value) => {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
    setEdited((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  const handleInputBlur = (identifier) => {
    setEdited((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onBlur={() => handleInputBlur("email")}
            name="email"
            onChange={(event) => {
              handleChangeInput("email", event.target.value);
            }}
            value={enteredValue.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => {
              handleChangeInput("password", event.target.value);
            }}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
