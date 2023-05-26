import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/story-section.module.scss';
import dropDownArrow from '../../../public/assets/img/drop-down-arrow.svg'
import dropDownArrowOpen from '../../../public/assets/img/drop-down-arrow-open.svg';

interface StorySectionProps {
    title: string;
}

function StorySection({ title }: StorySectionProps) {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

  return (
    <div className={style.storySection__container}>
        <div onClick={() => setDropDownOpen(!dropDownOpen)}>
            { dropDownOpen && <Image 
            className={style.storySection__dropDownArrow}
            src={dropDownArrow}
            alt='drop-down arrow closed'/> }
            { !dropDownOpen && <Image
            className={style.storySection__dropDownArrow}
            src={dropDownArrowOpen}
            alt='drop-down arrow open'
            height={25}/> }
        </div>
        <h1>{title}</h1>
    </div>
  )
};

export default StorySection;
