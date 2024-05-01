import React, { useState } from 'react';

import style from '../styles/subheader.module.scss';
import { Developer, Story } from '../lib/types';
import AddStoryDialog from './add-story-dialog';
interface SubheaderProps {
    developers: Developer[];
    tabTitle: string;
    refetchStories: () => void;
}

function SubHeader({ developers, tabTitle, refetchStories }: SubheaderProps) {
  return (
    <div className={style.subheader__container}>
      <div>
        {tabTitle === 'stories' && <AddStoryDialog developers={developers} refetchStories={refetchStories}/>}
      </div>
      <div className={style.subheader__storyPointsLabel}>STORY POINTS</div>
    </div>
  );
}

export default SubHeader;


