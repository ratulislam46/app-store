import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const AppDetails = () => {

    const {id} = useParams();
    const data = useLoaderData();
    console.log(id);

    const singleApp = data.find(app=> app.id == id );
    console.log(singleApp);


    return (
        <div className='my-12'>
            <h1 className='text-7xl'>app details {id}</h1>

            {/* button install and unstall  */}
            <div>
                <Link className='btn mt-20'>Install</Link>
            </div>

            {/* review section  */}
            <div className='border'>
                <h2>Your Rating</h2>
                <textarea type="text" placeholder="I know this app" className="textarea textarea-info"></textarea>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className='btn'>Submit Review</button>
            </div>

        </div>
    );
};

export default AppDetails;