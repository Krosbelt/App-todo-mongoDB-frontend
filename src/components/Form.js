import React, { useState } from "react";
import "../index.css";

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    addTodo({ title: inputValue, completed: false });
    setInputValue("");
  };

  return(
    <form className="container text-center" onSubmit={handleFormSubmit}>
        <div className="row">
            <div className="col-lg">
            <div className="d-flex flex-row justify-content-center">
                <input
                className="form-control form-control-lg"
                value={inputValue}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter something to do..."
                />
                <button type="submit" className="btn btn-success  rounded">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                    color="white"
                >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                </button>
            </div>
            </div>
        </div>
    </form>
  );
};

export default Form;
