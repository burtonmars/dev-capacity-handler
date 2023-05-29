import React from 'react';

import style from '../styles/developer-stories-list.module.scss';
import { Story } from '../lib/types';

interface DeveloperStoriesListProps {
    stories: Story[];
}

function DeveloperStoriesList({ stories }: DeveloperStoriesListProps ) {
  return (
    <div className={style.developerStories__container}>
      <ul>
        {stories.map((story: Story, index: number) => (
          <li key={index}>
            <div className={style.developerStories__storyContainer}>
              <div className={style.developerStories__title}>
                {story.title}
              </div>
              <div className={style.developerStories__points}>
                {story.points}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default DeveloperStoriesList;
