import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/subheader.module.scss';
import closeWindow from '../../../public/assets/img/close-window.webp'
import { Developer } from '../lib/types';
import { addNewStory } from '../../app/lib/stories';

interface SubheaderProps {
    developers: Developer[];
}

const fibonacciNumbers = [1,2,3,5,8,13,21]

function SubHeader({ developers }: SubheaderProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    assignee: '',
    points: '',
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // TODO: Handle form submission, e.g., send data to server
    console.log('Form values:', formValues);
    // Reset form values
    setFormValues({
      title: '',
      description: '',
      assignee: '',
      points: '',
    });
    setShowPopup(false);
  };

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div className={style.subheader__container}>
      <button className={style.subheader__newStoryButton} onClick={handleButtonClick}>+ NEW STORY</button>
      <p className={style.subheader__storyPointsLabel}>STORY POINTS</p>

      {showPopup && (
        <div className={style.dialogOverlay}>
          <div className={style.dialogBox}>
            <form onSubmit={handleSubmit}>
              <div className={style.subheader__cancelButton}>
                <button type="button" onClick={() => setShowPopup(false)}>
                  <Image 
                    src={closeWindow}
                    alt='close window'
                    height={30}>
                  </Image>
                </button>
              </div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" value={formValues.title} onChange={handleInputChange} />

              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" value={formValues.description} onChange={handleInputChange}></textarea>

              <div className={style.subheader__dialogueDropDowns}>
                <div className={style.subheader__dialogueDropDownLeft}>
                  <label htmlFor="assignee">Assignee:</label>
                  <select id="assignee" name="assignee" value={formValues.assignee} onChange={handleInputChange}>
                    <option value="">Select Assignee</option>
                      {developers.map((developer) => (
                        <option key={developer._id} value={developer._id}>
                          {developer.first_name + ' ' + developer.last_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className={style.subheader__dialogueDropDownRight}>
                  <label htmlFor="points">Story Points:</label>
                  <select id="points" name="points" value={formValues.points} onChange={handleInputChange}>
                    <option value="">Select Points</option>
                    {fibonacciNumbers.map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={style.dialogActions}>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubHeader;


