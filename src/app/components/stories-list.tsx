import React from 'react';

import style from '../styles/stories-list.module.scss';
import { Developer, Story } from '../lib/types';

interface StoriesListProps {
    stories: Story[];
}

function StoriesList({ stories }: StoriesListProps ) {
  return (
    <div className={style.listStories__container}>
      {stories.length > 0 ?
      (<ul>
        {stories.map((story: Story, index: number) => (
          //TODO: once Story IDs are working correctly, use those instead of index
          <li key={index}>
            <div className={style.listStories__storyContainer}>
              <div className={style.listStories__title}>
                {story.title}
              </div>
              <div className={style.listStories__developerAndStoryPointsContainer}>
                <div className={style.listStories__developerColorIcon}>
                  {/* TODO: figure out how to pull dev from story to get initials */}
                  SC
                </div>
                <div className={style.listStories__points}>
                  {story.points}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      ) : (
        <div className={style.listStories__noStories}>
          No Stories
        </div>)}
    </div>
  )
};

function getDevInitials(developer: Developer): string {
    return developer.first_name[0] + developer.last_name[0];
}

export default StoriesList;
