import React, { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Auth/AuthProvider';

const About = () => {

    const { user } = use(AuthContext)
    console.log(user);

    const aboutInfo = [
        "Discover top-rated apps across all categories.",
        "100% secure and verified app downloads.",
        "Fast and lightweight apps for daily tasks.",
        "Available in 50+ countries with localized support.",
        "Games, Productivity, Tools, Health & more.",
        "Apps get auto-updated for best experience.",
        "Loved the UI – smooth and super easy to use!",
        "Editor’s Choice apps, handpicked for you."
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-slate-900 text-gray-300 mt-2">

            <Helmet>
                <title>AppStore | About</title>
            </Helmet>

            {aboutInfo.map((item, index) => (
                <div
                    key={index}
                    className="p-4 bg-slate-800 rounded-lg shadow hover:shadow-lg transition h-[150px] flex items-center justify-center"
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default About;