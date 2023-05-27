import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/person-section.module.scss';
import dropDownArrow from '../../../public/assets/img/drop-down-arrow.svg'
import dropDownArrowOpen from '../../../public/assets/img/drop-down-arrow-open.svg';
import { Developer } from '../lib/types';

interface PersonSectionProps {
    developer: Developer;
}

function PersonSection({ developer }: PersonSectionProps) {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  
  const fullName = developer.first_name + ' ' + developer.last_name;

  return (
    <>
      <div className={style.personSection__container} onClick={() => setDropDownOpen(!dropDownOpen)}>
        <div className={style.personSection__dropDownIcon}>
              { dropDownOpen && <Image
              className={style.personSection__dropDownArrow}
              src={dropDownArrow}
              alt='drop-down arrow closed'/> }
              { !dropDownOpen && <Image
              className={style.personSection__dropDownArrow} 
              src={dropDownArrowOpen}
              alt='drop-down arrow open'/> }
          </div>
          <h1>{fullName}</h1>
      </div>
      { dropDownOpen && 
        <div>
          <p>{developer.position}</p>
        </div>
      }
    </>
  )
};

export default PersonSection;
