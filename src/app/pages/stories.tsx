import React, { useState } from 'react';

import style from '../styles/stories.module.scss';
import SubHeader from '../components/subheader';
import StorySection from '../components/story-section';
import { Developer } from '../lib/types';

const sections = [
    {
        "title": 'BACKLOG',
        "stories": []
    },
    {
        "title": 'IN PROGRESS',
        "stories": []
    },
    {
        "title": 'TESTING',
        "stories": []
    },
    {
        "title": 'DONE',
        "stories": []
    }
];

interface StoriesProps {
    developers: Developer[];
}

function Stories({ developers }: StoriesProps ) {
  return (
    <div className={style.stories__mainContainer}>
        <SubHeader />
        {sections.map((section, index) => (
            <div key={index} className={style.stories__section}>
                <StorySection title={section.title}/>
            </div>
        ))}
    </div>
  )
};

export default Stories;
