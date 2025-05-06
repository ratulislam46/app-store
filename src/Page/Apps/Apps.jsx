import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../Components/Navbar/Banner'
import ShowApp from './ShowApp';
import Team from '../../Components/Team/Team';

const Apps = () => {

    const data = useLoaderData();
    // console.log(data);

    const education = data.filter(app => app.category === "Education");
    const productivity = data.filter(app => app.category === "Productivity")
    const entertainment = data.filter(app => app.category === "Entertainment")
    const health = data.filter(app => app.category === "Health")

    // console.log(education, productivity, entertainment, health);

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            
            <div>
                <ShowApp title={'Education App'} apps={education}></ShowApp>
                <ShowApp title={'Productivity App'} apps={productivity}></ShowApp>
                <ShowApp title={'Entertainment App'} apps={entertainment}></ShowApp>
                <ShowApp title={'Health App'} apps={health}></ShowApp>
            </div>

            <div>
                <Team></Team>
            </div>
        </div>
    );
};

export default Apps;