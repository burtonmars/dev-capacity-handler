import React, { useEffect, useState } from 'react';

import style from '../styles/stories.module.scss';
import SubHeader from '../components/subheader';
import StorySection from '../components/story-section';
import { Developer, Story } from '../lib/types';
import { StatusEnum } from '../lib/enums';
import { Section } from '../lib/types';
interface StoriesProps {
  developers: Developer[];
  stories: Story[];
  refetchStories: () => void;
}

const sections: Section[] = [
    {
        "title": StatusEnum.BACKLOG,
        "stories": []
    },
    {
        "title": StatusEnum.IN_PROGRESS,
        "stories": []
    },
    {
        "title": StatusEnum.IN_REVIEW,
        "stories": []
    },
    {
        "title": StatusEnum.DONE,
        "stories": []
    }
];

function assignStoriesToSections(stories: Story[]) {
  const updatedSections: Section[] = sections.map((section) => ({
    ...section,
    stories: [],
  }));

  stories.forEach((story) => {
    const section = updatedSections.find((section) => section.title === story.status);
    if (section) {
      section.stories.push(story);
    }
  });

  return updatedSections;
}

function Stories({ developers, stories, refetchStories }: StoriesProps ) {
  const [sectionsData, setSectionsData] = useState<Section[]>([]);

  useEffect(() => {
    const updatedSections = assignStoriesToSections(stories);
    setSectionsData(updatedSections);
  }, [stories]);

  return (
    <div className={style.stories__mainContainer}>
        <SubHeader developers={developers} tabTitle={'stories'} refetchStories={refetchStories}/>
        {sectionsData.map((section, index) => (
            <div key={index} className={style.stories__section}>
                <StorySection section={section} developers={developers} refetchStories={refetchStories}/>
            </div>
        ))}
    </div>
  )
};

export default Stories;
