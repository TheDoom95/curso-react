import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="p-2">
            <h1 className="mb-4">Menú</h1>

            <ul>
                <li>
                    <Link className="text-blue-600 underline mb-1" to="/todolist">TODO List</Link>
                </li>

                <li>
                    <Link className="text-blue-600 underline mb-1" to="/fetch">Fetch</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
