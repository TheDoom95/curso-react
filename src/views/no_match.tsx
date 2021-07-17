import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="bg-blue-600 w-screen h-screen flex flex-row justify-center items-center">
            <div className="text-center">
                <h1 className="text-3xl text-white mb-6">404</h1>
                <Link className="bg-blue-500 text-white p-2" to="/">Ir a la home</Link>
            </div>
        </div>
    );
};

export default NoMatch;
