import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/person-section.module.scss';
import dropDownArrow from '../../../public/assets/img/drop-down-arrow.svg'
import dropDownArrowOpen from '../../../public/assets/img/drop-down-arrow-open.svg';
import { Developer, Story } from '../lib/types';
import DeveloperStoriesList from './developer-stories-list';

interface PersonSectionProps {
    developer: Developer;
    stories: Story[];
}

function PersonSection({ developer, stories }: PersonSectionProps) {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const fullName = developer.first_name + ' ' + developer.last_name;
  const developerStories = stories.filter(story => story.developer === developer._id);

  return (
    <>
      <div className={style.personSection__container} onClick={() => setDropDownOpen(!dropDownOpen)}>
        <div className={style.personSection__dropDownIcon}>
              { dropDownOpen && <Image
              className={style.personSection__dropDownArrow}
              src={dropDownArrow}
              alt='drop-down arrow closed'/> }
              { !dropDownOpen && <Image
              className={style.personSection__dropDownArrow} 
              src={dropDownArrowOpen}
              alt='drop-down arrow open'/> }
          </div>
          <h1>{fullName}</h1>
      </div>
      { dropDownOpen && 
        <div>
          <DeveloperStoriesList stories={developerStories}/>
        </div>
      }
    </>
  )
};

export default PersonSection;
