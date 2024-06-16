import './pages.css'
import RecipieSharing from "/src/Images/Recipie Sharing.jpg"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function RecipieDetails() {
  const { id } = useParams();
  const [recipie, setRecipie] = useState(null);

  useEffect(() => {
    fetchRecipieDetails();
  }, []);

  const fetchRecipieDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5500/recipies/${id}`); // Backend URL Connection
      setRecipie(response.data);
    } catch (error) {
      console.error('Error fetching recipie details:', error);
    }
  };

  if (!recipie) {
    return <div>Loading...</div>;
  }

  // Show Detials Of Selected Recipie:
  return(
    <div class="border">
    <div classname="container mt-4">
     <h2>{recipie.title}</h2>
     <div class="separator"></div>
      <p1>Description: {recipie.description}</p1>
      <div class="separator"></div>
      <h3>Ingredients:</h3>
      <ul className="list-group">
        {recipie.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div class="separator"></div>
      <h3>Steps:</h3>
      <ol className="list-group">
        {recipie.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <div class="separator"></div>
      <img src={RecipieSharing} width='20%'/>
    </div>
    </div>
  )
}