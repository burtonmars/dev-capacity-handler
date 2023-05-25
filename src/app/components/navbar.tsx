import React from 'react';

import style from '../styles/navbar.module.scss';

function Navbar() {
  return (
    <div className={style.navbar__container}>
      <div className={style.navbar__storiesTab}>
        Stories
      </div>
      <div className={style.navbar__peopleTab}>
        People
      </div>
    </div>
  )
};

export default Navbar;
