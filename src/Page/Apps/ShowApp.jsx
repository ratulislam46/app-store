import React from 'react';
import AllApp from './AllApp';

const ShowApp = ({ apps, title }) => {

    // console.log(apps); 

    return (
        <div className='my-10 border rounded-2xl py-5 bg-[#14213d]'>
            <h2 className='text-3xl text-white font-semibold border-b pb-4 pl-5'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>

                {
                    apps.map(app =>
                        <AllApp app={app} key={app.id}></AllApp>
                    )
                }

            </div>
        </div>
    );
};

export default ShowApp;