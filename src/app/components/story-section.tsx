import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/story-section.module.scss';
import dropDownArrow from '../../../public/assets/img/drop-down-arrow.svg'
import dropDownArrowOpen from '../../../public/assets/img/drop-down-arrow-open.svg';
import { Developer, Story } from '../lib/types';
import StoriesList from './stories-list';
import { Section } from '../lib/types';
interface StorySectionProps {
    section: Section;
    developers: Developer[];
    refetchStories: () => void;
}

function StorySection({ section, developers, refetchStories }: StorySectionProps) {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

  return (
    <>
    <div className={style.storySection__container} onClick={() => setDropDownOpen(!dropDownOpen)}>
        <div>
            { dropDownOpen && <Image 
            className={style.storySection__dropDownArrow}
            src={dropDownArrow}
            alt='drop-down arrow closed'
            height={25}/> }
            { !dropDownOpen && <Image
            className={style.storySection__dropDownArrow}
            src={dropDownArrowOpen}
            alt='drop-down arrow open'
            height={25}/> }  
        </div>
        <h1>{section.title}</h1>
      </div>
      {dropDownOpen && <StoriesList stories={section.stories} developers={developers} refetchStories={refetchStories} />}
    </>
  )
};

export default StorySection;
