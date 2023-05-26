import React, { useState } from 'react';

import style from '../styles/navbar.module.scss';

interface NavbarProps {
  activeTab: string | null;
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}

function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={style.navbar__container}>
      <div
        className={`${style.navbar__storiesTab} ${activeTab === 'stories' ? style.active : ''}`}
        onClick={() => handleClick('stories')}
      >
        Stories
      </div>
      <div
        className={`${style.navbar__peopleTab} ${activeTab === 'people' ? style.active : ''}`}
        onClick={() => handleClick('people')}
      >
        People
      </div>
    </div>
  );
};

export default Navbar;
