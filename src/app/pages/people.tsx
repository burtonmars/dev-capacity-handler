import React from 'react';

import style from '../styles/people.module.scss';
import SubHeader from '../components/subheader';
import PersonSection from '../components/person-section';
import { Developer } from '../lib/types';

interface PeopleProps {
    developers: Developer[];
}

function People({ developers }: PeopleProps ) { 
  return (
    <div className={style.people__mainContainer}>
        <SubHeader />
        {developers.map((developer: Developer) => (
            <div key={developer._id} className={style.stories__section}>
                <PersonSection developer={developer}/>
            </div>
        ))}
    </div>
  )
};

export default People;
