import React, { useState } from 'react';
import Image from 'next/image';

import style from '../styles/edit-story-dialog.module.scss';
import closeWindow from '../../../public/assets/img/close-window.webp'
import { fibonacciNumbers } from '../lib/data';
import { Developer, Story } from '../lib/types';
import { StatusEnum } from '../lib/enums';
interface EditStoryDialogProps {
  developers: Developer[];
  story: Story;
  setShowPopup: (showPopup: boolean) => void;
  refetchStories: () => void;
}

const EditStoryDialog = ({ developers, story, setShowPopup, refetchStories }: EditStoryDialogProps ) => {
  const [formValues, setFormValues] = useState({
    _id: story._id,
    title: story.title,
    description: story.description,
    status: story.status,
    story_points: story.story_points,
    developer: story.developer,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const statusBuckets = Object.values(StatusEnum);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    console.log(formValues);

    try {
      const response = await fetch('/api/stories', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update the story');
      }
      setShowPopup(false);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
      refetchStories();
    }
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
               <div className={style.editStoryDialog__errorContainer}>
                {error && <p className={style.errorMessage}>{error}</p>}
              </div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" value={formValues.title} onChange={handleInputChange} />

              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" value={formValues.description} onChange={handleInputChange}></textarea>

              <div className={style.editStoryDialog__developerDropdown}>
                <label htmlFor="developer">Assignee:</label>
                <select id="developer" name="developer" value={formValues.developer} onChange={handleInputChange}>
                  <option value="">Select Assignee</option>
                    {developers.map((developer) => (
                      <option key={developer._id} value={developer._id}>
                        {developer.first_name + ' ' + developer.last_name}
                      </option>
                    ))}
                </select>
              </div>
              <div className={style.editStoryDialog__dialogueDropDowns}>
                <div className={style.editStoryDialod__dialogueDropDownsLeft}>
                  <label htmlFor="status">Status:</label>
                  <select name="status" id="status" value={formValues.status} onChange={handleInputChange}>
                    {statusBuckets.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={style.editStoryDialog__dialogueDropDownRight}>
                  <label htmlFor="story_points">Story Points:</label>
                  <select id="story_points" name="story_points" value={formValues.story_points} onChange={handleInputChange}>
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
               <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default EditStoryDialog;