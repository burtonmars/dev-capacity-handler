import React, { useEffect, useState } from 'react';

import style from '../styles/stories.module.scss';
import SubHeader from '../components/subheader';
import StorySection from '../components/story-section';
import { Developer, Story } from '../lib/types';
import { statusBuckets } from '../lib/enums';

interface Section {
    title: string;
    tag: string;
    stories: Story[]
}

interface StoriesProps {
    developers: Developer[];
}

const sections: Section[] = [
    {
        "title": statusBuckets.BACKLOG,
        "tag": "backlog",
        "stories": []
    },
    {
        "title": statusBuckets.IN_PROGRESS,
        "tag": "in_progress",
        "stories": []
    },
    {
        "title": statusBuckets.IN_REVIEW,
        "tag": "in_review",
        "stories": []
    },
    {
        "title": statusBuckets.DONE,
        "tag": "done",
        "stories": []
    }
];

function assignStoriesToSections(developers: Developer[]) {
  const updatedSections: Section[] = sections.map((section) => ({
    ...section,
    stories: [],
  }));

  developers.forEach((developer: Developer) => {
    developer.stories.forEach((story) => {
      const section = updatedSections.find((section) => section.tag === story.status);
      if (section) {
        section.stories.push(story);
      }
    });
  });

  return updatedSections;
}

function Stories({ developers }: StoriesProps ) {
  const [sectionsData, setSectionsData] = useState<Section[]>([]);

  useEffect(() => {
    const updatedSections = assignStoriesToSections(developers);
    setSectionsData(updatedSections);
  }, [developers]);

  return (
    <div className={style.stories__mainContainer}>
        <SubHeader developers={developers}/>
        {sectionsData.map((section, index) => (
            <div key={index} className={style.stories__section}>
                <StorySection section={section}/>
            </div>
        ))}
    </div>
  )
};

export default Stories;
