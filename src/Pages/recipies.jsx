import './pages.css'
import Food from "/src/Images/Feast.jpg"
import RecipieSharing from "/src/Images/Recipie Sharing.jpg"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function Recipies() {
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    fetchRecipies();
  }, []);

  const fetchRecipies = async () => {
    try {
      const response = await axios.get('http://localhost:5500/recipies'); // Backend URL Connection
      setRecipies(response.data);
    } catch (error) {
      console.error('Error fetching recipies:', error);
    }
  };


  // List All User Submitted Recipies In A List
    return(
        <>
        <div class="separator"></div>
        <img src={RecipieSharing} width='20%'/>
        <div class="separator"></div>
        <div class="border">
        <h1>Recipies Page</h1>
        <div class="separator"></div>
        <p1>Here you can view all created and uploaded recipies submitted through our site. If you find a recipie you like, don't forget to leave a review to show your appriciation, or provide some feedback as to what you would change about the dish, and why?
            We are a friendly family based community, so please keep your reviews appropraite. If you wish to upload your own recipies, please check out the <i>'Create Recipies'</i> page above. Happy scrolling.</p1>
            <div class="separator"></div>
            <ul>
        {recipies.map(recipie => (
          <li key={recipie.id}>
            <Link to={`/recipie/${recipie.id}`}>{recipie.title}</Link>
          </li>
        ))}
      </ul>
      <p1>More Recipies Coming Soon...</p1>
      </div>
      <div class="separator"></div>
      <img src={Food} width='70%'/>
      <div class="separator"></div>
    </>
    )
};
