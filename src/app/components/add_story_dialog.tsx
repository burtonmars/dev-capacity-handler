import React, { useState } from 'react'
import Image from 'next/image';

import closeWindow from '../../../public/assets/img/close-window.webp'

import style from '../styles/add-story-dialog.module.scss';
interface AddStoryDialogProps {
  developers: any[];
}

const fibonacciNumbers = [1,2,3,5,8,13,21]

function AddStoryDialog({ developers }: AddStoryDialogProps) {
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

  const handleSubmit =  (event: any) => {
    event.preventDefault();
    // TODO: write the form values to the db
    //const response = addNewStory(formValues);
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
    <div className={style.addStoryDialog__container}>
      <button className={style.addStoryDialog__newStoryButton} onClick={handleButtonClick}>+ NEW STORY</button>

      {showPopup && (
        <div className={style.dialogOverlay}>
          <div className={style.dialogBox}>
            <form onSubmit={handleSubmit}>
              <div className={style.addStoryDialog__cancelButton}>
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

              <div className={style.addStoryDialog__dialogueDropDowns}>
                <div className={style.addStoryDialog__dialogueDropDownLeft}>
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
                <div className={style.addStoryDialog__dialogueDropDownRight}>
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
};

export default AddStoryDialog;
