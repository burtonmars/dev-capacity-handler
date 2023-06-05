import React from 'react';

import style from '../styles/stories-list.module.scss';
import { Developer, DeveloperInfo, Story } from '../lib/types';
import StoryTab from './story-tab';

interface StoriesListProps {
  stories: Story[];
  developers: Developer[];
}

function StoriesList({ stories, developers }: StoriesListProps ) {
  const storyTabDeveloperInfo = getStoryTabDevAndIcon(developers, stories);

  return (
    <div className={style.listStories__container}>
      {stories.length > 0 ?
      (<ul>
        {stories.map((story: Story, index: number) => (
          //TODO: once Story IDs are working correctly, use those instead of index
          <li key={story._id}>
            <StoryTab story={story} developerInfo={storyTabDeveloperInfo.filter((info) => {
              return info.storyId === story._id;
            })}/>
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

function getStoryTabDevAndIcon(developers: Developer[], stories: Story[]): DeveloperInfo[] {
  const storyTabDeveloperColor: DeveloperInfo[] = [];
  stories.forEach((story: Story) => {
    const developer = developers.find((developer: Developer) => developer._id === story.developer);
    if (!developer) return [];
    const developerInitials: string = getDevInitials(developer);
    const storyTabDevColor: DeveloperInfo = {
      storyId: story._id,
      color: developer.color,
      developerInitials: developerInitials
    };
    storyTabDeveloperColor.push(storyTabDevColor);
  });
  return storyTabDeveloperColor;
}

export default StoriesList;
