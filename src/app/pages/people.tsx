import React from 'react';

import style from '../styles/people.module.scss';
import SubHeader from '../components/subheader';
import PersonSection from '../components/person-section';
import { Developer, Story } from '../lib/types';

interface PeopleProps {
    developers: Developer[];
    stories: Story[];
    refetchStories: () => void;
}

function People({ developers, stories, refetchStories }: PeopleProps ) {
  return (
    <div className={style.people__mainContainer}>
        <SubHeader developers={developers} tabTitle={'people'} refetchStories={refetchStories}/>
        {developers.map((developer: Developer) => (
            <div key={developer._id} className={style.people__section}>
                <PersonSection developer={developer} stories={stories} developers={developers} refetchStories={refetchStories} />
            </div>
        ))}
    </div>
  )
};

export default People;
