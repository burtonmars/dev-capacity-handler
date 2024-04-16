import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/edit-story-dialog.module.scss';
import closeWindow from '../../../public/assets/img/close-window.webp'
import { fibonacciNumbers } from '../lib/data';
import { Developer, Story } from '../lib/types';

interface EditStoryDialogProps {
  developers: Developer[];
  story: Story;
  setShowPopup: (showPopup: boolean) => void;
}

const EditStoryDialog = ({ developers, story, setShowPopup }: EditStoryDialogProps ) => {
  const [formValues, setFormValues] = useState({
    title: story.title,
    description: story.description,
    assignee: story.developer,
    points: story.story_points,
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
      points: 0,
    });
    setShowPopup(false);
  };

  return (
    <div className={style.editStoryDialog__container}>
        <div className={style.dialogOverlay}>
          <div className={style.dialogBox}>
            <form onSubmit={handleSubmit}>
              <div className={style.editStoryDialog__cancelButton}>
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

              <div className={style.editStoryDialog__dialogueDropDowns}>
                <div className={style.editStoryDialog__dialogueDropDownLeft}>
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
                <div className={style.editStoryDialog__dialogueDropDownRight}>
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
    </div>
  );
};

export default EditStoryDialog;