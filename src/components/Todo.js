import React, { useState } from "react";

const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompleted] = useState(completed);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;

    if (key === 13) {
      editTodoItemProp({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleButtonClick = () => {
    setCompleted((oldCompleted) => {
      const newState = !oldCompleted;
      editTodoItemProp({ completed: newState });
      return newState;
    });
  };

  return (
    <div className="mb-3">
      {isEditing ? (
        <div className="">
          <div className="input-group-text">
            <input
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
              autoFocus={true}
              value={tempValue}
              
            />
          </div>
        </div>
      ) : (
        <>  
           <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div className="d-flex flex-row">
                            <div className="form-control form-control-md bg-light text-dark text-bolder" onDoubleClick={handleDivDoubleClick}>
                                <p className={"" + (completedState ? "color text-decoration-line-through" : "")}>
                                    {value}
                                </p>
                            </div>
                            
                            <button
                                className={
                                    "btn btn-primary" +
                                    (completedState ? "btn btn-success" : "btn btn-danger")
                                }
                                onClick={handleButtonClick}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-check2-circle"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                            <button onClick={removeTodoItemProp} className="btn btn-danger ms-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-trash3-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
           </div>
        </>
      )}
    </div>
  );
};

export default Todo;
