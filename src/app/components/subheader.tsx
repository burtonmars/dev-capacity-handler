import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/subheader.module.scss';
import { Developer } from '../lib/types';
import AddStoryDialog from './add_story_dialog';
interface SubheaderProps {
    developers: Developer[];
    tabTitle: string;
}

function SubHeader({ developers, tabTitle }: SubheaderProps) {
  return (
    <div className={style.subheader__container}>
      <div>
        {tabTitle === 'stories' && <AddStoryDialog developers={developers}/>}
      </div>
      <div className={style.subheader__storyPointsLabel}>STORY POINTS</div>
    </div>
  );
}

export default SubHeader;


