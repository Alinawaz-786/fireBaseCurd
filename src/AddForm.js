import "./App.css";
import React, { useState, useEffect } from 'react';
import { firestore } from "./firebase_setup/firebase";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc, getDoc } from "firebase/firestore";


const AddForm = () => {
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Save");
    const [studentList, setStudentList] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(firestore, "students"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudentList(newData);
                console.log(studentList, newData);
            })
    }
    useEffect(() => {
        fetchPost();
    }, []);

    const addStudent = async (e) => {
        e.preventDefault();
        if (id) {
            console.log(id);
            const StuRef = doc(firestore, 'students', id);
            // console.log(newText,id);
            await updateDoc(StuRef, {
                name: name,
                lastName: lastName,
                age: age,
                description: description,
            });
            setStudentList(studentList.map((item) => (item.id === id ? {
                ...item,
                name: name,
                lastName: lastName,
                age: age,
                description: description,
            } : item)));
        } else {

            try {
                const docRef = await addDoc(collection(firestore, "students"), {
                    name: name,
                    lastName: lastName,
                    age: age,
                    description: description,
                });

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

    }

    const updateStudent = async (id) => {
        // Update todo in Firestore
        const studentRef = doc(firestore, 'students', id);
        const studentsnapShot = await getDoc(studentRef);
        if (studentsnapShot.exists()) {
            const studData = { id: studentsnapShot.id, ...studentsnapShot.data() };
            console.log('studData:', studData);
            setID(studData.id)
            setStatus("Update");
            setAge(studData.age);
            setName(studData.name);
            setLastName(studData.lastName);
            setDescription(studData.description);

            // return studData;
        }
        console.log(studentRef);
    };

    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header"> Student List </h1>
                <div>
                    <div>
                        <input type="text"
                            placeholder="Enter First Name"
                            value={name ? name : ''}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="text"
                            placeholder="Enter Last Name"
                            value={lastName ? lastName : ''}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="number"
                            placeholder="Enter Age"
                            value={age ? age : ''}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)}
                            value={description ? description : ''}
                        >

                        </textarea>
                    </div>
                </div>
                <div className="btn-container">
                    <button type="submit" className="btn" onClick={addStudent}>{status}</button>
                </div>

            </div>
            <div className="todo-content">
                {
                    studentList?.map((item, i) => (
                        <p key={i}>
                            {item.name}
                            <button onClick={() => updateStudent(item.id)}>Update</button>
                        </p>
                    ))
                }
            </div>
        </section >
    )
}

export default AddForm