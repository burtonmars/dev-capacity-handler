import React, { useState } from 'react'
import Image from 'next/image';

import closeWindow from '../../../public/assets/img/close-window.webp'
import style from '../styles/add-story-dialog.module.scss';
import { fibonacciNumbers } from '../lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Story } from '../lib/types';

interface AddStoryDialogProps {
  developers: any[];
  refetchStories: () => void;
}

function AddStoryDialog({ developers, refetchStories }: AddStoryDialogProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    status: 'backlog',
    story_points: '',
    developer: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

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

    try {
      const response = await fetch('/api/stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to save the story');
      }

      setFormValues({
        title: '',
        description: '',
        status: '',
        story_points: '',
        developer: '',
      });
      setShowPopup(false);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
      refetchStories();
    }
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
              {error && <p className={style.errorMessage}>{error}</p>}
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" value={formValues.title} onChange={handleInputChange} />

              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" value={formValues.description} onChange={handleInputChange}></textarea>

              <div className={style.addStoryDialog__dialogueDropDowns}>
                <div className={style.addStoryDialog__dialogueDropDownLeft}>
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
                <div className={style.addStoryDialog__dialogueDropDownRight}>
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
      )}
    </div>
  );
};

export default AddStoryDialog;
