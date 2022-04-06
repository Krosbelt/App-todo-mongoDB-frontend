import React, { useState, useEffect } from "react";
import todos from "./apis";
import './index.css'

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle = "App ToDo";

const App = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await todos.get("/todos");
            setTodoList(data);
        }

        fetchData();
    }, []);

    const addTodo = async (item) => {
        const { data } = await todos.post("/todos", item);
        setTodoList((oldList) => [...oldList, data]);
    };

    const removeTodo = async (id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
    };

    const editTodo = async (id, item) => {
        await todos.put(`/todos/${id}`, item);
    };

    return (
        
        <div className="container">
            <div className="row"  >
            <div className="card col-lg-10 col-md- col-sm-6 bg-dark bg-gradient rounded position-absolute top-50 start-50 translate-middle">
                <div class="card-header">
                    <h1>{appTitle}</h1>
                </div>
                <div class="card-body">
                    <Form addTodo={addTodo} />
                    <br></br>
                    <List
                            editTodoListProp={editTodo}
                            removeTodoListProp={removeTodo}
                            list={todoList}
                        />
                </div>
            </div>
            </div>
        </div>
    );
};

export default App;