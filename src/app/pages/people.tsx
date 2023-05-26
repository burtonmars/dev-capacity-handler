import React from 'react';

import style from '../styles/people.module.scss';
import SubHeader from '../components/subheader';
import PersonSection from '../components/person-section';

const personTemp = {
  firstName: 'John',
  lastName: 'Doe',
  color: '#11A899'
}

function People() {
  return (
    <div className={style.people__mainContainer}>
        <SubHeader />
        {/* TODO: call API to get developers */}
        {/* {developers.map((developer, index) => (
            <div key={index} className={style.stories__section}>
                <PersonSection title={developer.firstName}/>
            </div>
        ))} */}
        <div className={style.people__section}>
          <PersonSection 
            firstName={personTemp.firstName} 
            lastName={personTemp.lastName}
            color={personTemp.color}/>
        </div>
    </div>
  )
};

export default People;
