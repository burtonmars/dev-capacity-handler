import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/person-section.module.scss';
import dropDownArrow from '../../../public/assets/img/drop-down-arrow.svg'
import dropDownArrowOpen from '../../../public/assets/img/drop-down-arrow-open.svg';

interface PersonSectionProps {
    firstName: string;
    lastName: string;
    color: string;
}

function PersonSection({ firstName, lastName, color }: PersonSectionProps) {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  
  const fullName = firstName + ' ' + lastName;

  return (
    <div className={style.personSection__container}>
      <div onClick={() => setDropDownOpen(!dropDownOpen)}>
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
  )
};

export default PersonSection;
