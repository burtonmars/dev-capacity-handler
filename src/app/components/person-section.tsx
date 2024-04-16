import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/person-section.module.scss';
import dropDownArrow from '../../../public/assets/img/drop-down-arrow.svg'
import dropDownArrowOpen from '../../../public/assets/img/drop-down-arrow-open.svg';
import { Developer, Story } from '../lib/types';
import DeveloperStoriesList from './developer-stories-list';

interface PersonSectionProps {
    developer: Developer;
    developers: Developer[];
    stories: Story[];
    refetchStories: () => void;
}

function PersonSection({ developer, stories, developers, refetchStories }: PersonSectionProps) {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const fullName = developer.first_name + ' ' + developer.last_name;
  const totalStoryPoints = stories.filter(story => story.developer === developer._id)
    .reduce((acc, story) => acc + parseInt(String(story.story_points), 10), 0);
  const developerStories = stories.filter(story => story.developer === developer._id);

  return (
    <>
      <div className={style.personSection__container} onClick={() => setDropDownOpen(!dropDownOpen)}>
        <div className={style.personSection__dropDownContainer}>
          <div className={style.personSection__dropDownIcon}>
                { dropDownOpen && <Image
                className={style.personSection__dropDownArrow}
                src={dropDownArrow}
                alt='drop-down arrow closed'
                height={25}/> }
                { !dropDownOpen && <Image
                className={style.personSection__dropDownArrow} 
                src={dropDownArrowOpen}
                alt='drop-down arrow open'
                height={25}/> }
            </div>
            <h1>{fullName}</h1>
        </div>
        <div className={style.personSection__totalStoryPoints}>
          <div>{totalStoryPoints}</div>
        </div>
      </div>
      { dropDownOpen && 
        <div>
          <DeveloperStoriesList stories={developerStories} developers={developers} refetchStories={refetchStories}/>
        </div>
      }
    </>
  )
};

export default PersonSection;
