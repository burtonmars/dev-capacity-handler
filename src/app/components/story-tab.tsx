import React, { useState } from 'react';

import style from '../styles/story-tab.module.scss';
import { Developer, DeveloperInfo, Story } from '../lib/types';
import EditStoryDialog from './edit-story-dialog';

interface StoryTabProps {
    story: Story;
    developerInfo: DeveloperInfo[];
    developers: Developer[];
}

function StoryTab({ story, developerInfo, developers }: StoryTabProps) {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };
    
  return (
    <>
        <div className={style.storyTab__storyContainer} onClick={handleButtonClick}>
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
        {showPopup && (
            <EditStoryDialog developers={developers} story={story} setShowPopup={setShowPopup}/>
        )}
    </>
    );
};

export default StoryTab;
