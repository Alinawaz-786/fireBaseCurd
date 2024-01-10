import "./App.css";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { firestore } from "./firebase_setup/firebase";
import Table from "./Table";


const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(firestore, "todos"), {
                todo: todo,
            });
            fetchPost();
            console.log("Document written with ID: ", docRef.id, todo);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchPost = async () => {
        await getDocs(collection(firestore, "todos"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTodos(newData);
            })
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const updateTodo = async (id, newText) => {
        // Update todo in Firestore
        const todoRef = doc(firestore, 'todos', id);
        // console.log(newText,id);
        await updateDoc(todoRef, { text: newText });
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: newText } : todo)));

    };

    const deleteTodo = async (id) => {
        // Delete todo from Firestore
        const todoRef = doc(firestore, 'todos', id);
        await deleteDoc(todoRef);
        setTodos(todos.filter((todo) => todo.id !== id));
    };


    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>

                <div>

                    <div>
                        <input
                            type="text"
                            placeholder="What do you have to do today?"
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>

                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addTodo}
                        >
                            Submit
                        </button>
                    </div>

                </div>

                <div className="todo-content">
                    <Table data={todos} ></Table>
                </div>
            </div>
        </section>
    )
}

export default Todo