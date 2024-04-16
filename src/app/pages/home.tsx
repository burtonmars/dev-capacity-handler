"use client"
import React, { useState } from 'react';

import style from '../styles/home.module.scss';
import Stories from './stories';
import People from './people';
import Navbar from '../components/navbar';
import Header from '../components/header';

import { Developer, Story } from '../lib/types';

interface homeProps {
    developers: Developer[];
    stories: Story[];
    refetchStories: () => void;
}

function Home({ developers, stories, refetchStories }: homeProps ) {
  const [activeTab, setActiveTab] = useState<string | null>('stories');

  return (
    <div className={style.home__container}>
        <Header />
        <div className={style.home__navbarContainer}>
          <Navbar key={activeTab} activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'stories' && <Stories developers={developers} stories={stories} refetchStories={refetchStories}/>}
            {activeTab === 'people' && <People developers={developers} stories={stories} refetchStories={refetchStories}/>}
        </div>
    </div>
  )
}

export default Home
