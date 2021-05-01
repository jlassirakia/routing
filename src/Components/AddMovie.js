
  import React, { useState } from 'react';


import Modal from 'react-modal';
  import './AddMovie.css';
  
  
  const AddMovie = ({
  
      addMovie,
      setName,
      setImage,
      setDate,
      setRating,
      setDescription,
    }) => {
      const [modalIsOpen, setIsOpen] = useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
      const handleSubmit = (e) => {
        addMovie(e);
        setIsOpen(false);
      };
    
      return (
        <div className='Add-btn-container'>
          <button className='bt_add' onClick={openModal}>
                      <b> add Movie </b>     </button>
          <Modal
            className='add-modal'
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <h1 className='addMovie-h1'>Add Your movie</h1>
            <form className="card">
              <label> Name</label>
              <input
                type='text'
                name='name'
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label> Rating </label>
              <input
                type='text'
                name='rating'
                required
                onChange={(e) => setRating(e.target.value)}
              />
              <label>Date</label>
              <input
                type='text'
                name='date'
                required
                onChange={(e) => setDate(e.target.value)}
              />
              <label> Image</label>
              <input
                type='url'
                name='image'
                required
                onChange={(e) => setImage(e.target.value)}
              />
              <label> Summary</label>
              <textarea
                type='text'
                name='description'
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </form>
            <button className='Modal-btn' onClick={handleSubmit}>
              Submit
            </button>
            <button className='Modal-btn' onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
      );
    };
    
    export default AddMovie;
  