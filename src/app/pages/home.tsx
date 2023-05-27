"use client"
import React, { useState } from 'react';

import style from '../styles/home.module.scss';
import Stories from './stories';
import People from './people';
import Navbar from '../components/navbar';
import Header from '../components/header';

interface homeProps {
    developers: any;
}

function Home({ developers }: homeProps ) {
  const [activeTab, setActiveTab] = useState<string | null>('stories');

  return (
    <div className={style.home__container}>
        <Header />
        <Navbar key={activeTab} activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'stories' && <Stories developers={developers} />}
            {activeTab === 'people' && <People developers={developers}/>}
    </div>
  )
}

export default Home
