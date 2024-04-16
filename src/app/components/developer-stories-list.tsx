import React, { useState } from 'react';

import style from '../styles/developer-stories-list.module.scss';
import { Developer, Story } from '../lib/types';
import EditStoryDialog from './edit-story-dialog';

interface DeveloperStoriesListProps {
    stories: Story[];
    developers: Developer[];
    refetchStories: () => void;
}

function DeveloperStoriesList({ stories, developers, refetchStories }: DeveloperStoriesListProps ) {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
      setShowPopup(true);
  };

  return (
    <div className={style.developerStories__container}>
      {stories.length > 0 ? (
      <ul>
        {stories.map((story: Story, index: number) => (
          <li key={index}>
            <div className={style.developerStories__storyContainer} onClick={handleButtonClick}>
              <div className={style.developerStories__title}>
                {story.title}
              </div>
              <div className={style.developerStories__points}>
                {story.story_points}
              </div>
            </div>
            {showPopup && (
              <EditStoryDialog developers={developers} story={story} setShowPopup={setShowPopup} refetchStories={refetchStories}/>
            )}
          </li>
        ))}
      </ul>) : (
        <div className={style.developerStories__noStories}>
          No Stories
        </div>)}
    </div>
  )
};

export default DeveloperStoriesList;
