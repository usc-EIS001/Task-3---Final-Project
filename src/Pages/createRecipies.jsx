import './pages.css'
import RecipieSharing from "/src/Images/Recipie Sharing.jpg"
import React, { useState } from 'react';
import axios from 'axios';

export function CreateRecipies() {
  const handleCreateRecipie = () => {
    // Create An Alert To Inform Client The Data Is Submitted
    alert('Recipie Successfully Created, Check The Recipie Page To View It');
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debug Line

    const newRecipie = {
      title,
      description,
      ingredients: ingredients.split(',').map(item => item.trim()),
      steps: steps.split(',').map(item => item.trim()),
    };

    console.log('Recipie data to send:', newRecipie); // Debug Line

    try {
      const response = await axios.post('http://localhost:5500/recipies', newRecipie); // Backend URL Connection
      console.log('Server response:', response.data); // Debug Line
      // Optionally, redirect to another page or clear the form
    } catch (error) {
      console.error('Error creating recipie:', error); // Debug Line
    }
  };


  // Create Recipie Forum:
    return(
        <>
        <img src={RecipieSharing} width='20%'/>
        <div class="separator"></div>
        <div class="border">
        <h1>Create Recipies Page</h1>
        <div class="separator"></div>
        <p1>Here you can upload your favourite dishes and foods you've cooked that you want to share with the world. Simply fill out the form below and click <i>'Submit'</i> to share your crerations which can then be views in the <i>'Recipies'</i> page.</p1>
        <div class="separator"></div>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div class="separator"></div>

        <div>
          <label>Description: </label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        
        <div class="separator"></div>

        <div>
          <label>Ingredients (comma separated): </label>
          <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        </div>

        <div class="separator"></div>

        <div>
          <label>Steps (comma separated): </label>
          <input type="text" value={steps} onChange={(e) => setSteps(e.target.value)} required />
        </div>

        <div class="separator"></div>

        <button onClick={handleCreateRecipie} class="rSubmit" type="submit">Create Recipie</button>
      </form>
      </div>
        </>
    )
}
