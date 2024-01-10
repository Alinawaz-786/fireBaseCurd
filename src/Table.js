import './styles.css';
import React, { useState, useEffect } from 'react';

const Table = (props) => {
    const [header, setHeader] = useState([]);
    const theader = [];
    useEffect(() => {
        props.data.forEach(function (item) {
            Object.keys(item).forEach(function (key) {
                theader.push(key);
                console.log("key:" + key + "value:" + item[key]);
            });
        });
        setHeader(theader);

    }, [props.data])
    return (
        <section className="todo-container">
            <div className="todo">
                <h2>Table data</h2>
                <table className="custom-table">
                    <thead>
                        <tr>
                            {header.map((item, index) => {
                                return (
                                    <th key={index}>{item}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {header.map((column, colIndex) => (
                                    <td key={colIndex}>{row[column]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Table