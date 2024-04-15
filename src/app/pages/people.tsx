import React from 'react';

import style from '../styles/people.module.scss';
import SubHeader from '../components/subheader';
import PersonSection from '../components/person-section';
import { Developer, Story } from '../lib/types';

interface PeopleProps {
    developers: Developer[];
    stories: Story[];
}

function People({ developers, stories }: PeopleProps ) {
  return (
    <div className={style.people__mainContainer}>
        <SubHeader developers={developers} tabTitle={'people'}/>
        {developers.map((developer: Developer) => (
            <div key={developer._id} className={style.people__section}>
                <PersonSection developer={developer} stories={stories}/>
            </div>
        ))}
    </div>
  )
};

export default People;
