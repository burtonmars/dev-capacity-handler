"use client"
import { useState } from 'react';

import Navbar from './components/navbar';
import Header from './components/header';
import style from './styles/page.module.css';
import Stories from './pages/stories';
import People from './pages/people';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>('stories');

  return (
    <main className={style.home__main}>
      <Header />
      <Navbar key={activeTab} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'stories' && <Stories />}
      {activeTab === 'people' && <People />}
    </main>
  )
};