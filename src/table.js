import React, { useState, useEffect } from 'react';
import './App.css';

const Table = ({ form }) => {


    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Table;