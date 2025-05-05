import React from 'react';
import { useLoaderData } from 'react-router';

const Apps = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1>apps</h1>
        </div>
    );
};

export default Apps;