import React from 'react';

import style from '../styles/story-tab.module.scss';
import { DeveloperInfo, Story } from '../lib/types';

interface StoryTabProps {
    story: Story;
    developerInfo: DeveloperInfo[];
}

function StoryTab({ story, developerInfo }: StoryTabProps) {
  return (
    <div className={style.storyTab__storyContainer}>
        <div className={style.storyTab__title}>
        {story.title}
        </div>
        <div className={style.storyTab__developerAndStoryPointsContainer}>
            <div   className={style.storyTab__developerColorIcon} style={{backgroundColor: `#${developerInfo[0].color}` }}>
                {developerInfo[0].developerInitials}
            </div>
            <div className={style.storyTabs__points}>
                {story.story_points}
            </div>
        </div>
    </div>
    )
}

export default StoryTab
